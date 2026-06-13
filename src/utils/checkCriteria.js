const superscriptMap = {
  '\u2070': '0',
  '\u00b9': '1',
  '\u00b2': '2',
  '\u00b3': '3',
  '\u2074': '4',
  '\u2075': '5',
  '\u2076': '6',
  '\u2077': '7',
  '\u2078': '8',
  '\u2079': '9',
  '\u207a': '+',
  '\u207b': '-',
};

const subscriptMap = {
  '\u2080': '0',
  '\u2081': '1',
  '\u2082': '2',
  '\u2083': '3',
  '\u2084': '4',
  '\u2085': '5',
  '\u2086': '6',
  '\u2087': '7',
  '\u2088': '8',
  '\u2089': '9',
};

const romanMap = {
  i: '1',
  ii: '2',
  iii: '3',
  iv: '4',
};

export function normalizeCriteriaText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079\u207a\u207b]/g, (char) => superscriptMap[char] ?? char)
    .replace(/[\u2080-\u2089]/g, (char) => subscriptMap[char] ?? char)
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[−–—]/g, '-')
    .replace(/=>|->|→|⇒/g, ' ')
    .replace(/\b(kupfer|eisen|zink|silber|lithium)\s*-\s*ionen?\b/g, '$1ionen')
    .replace(/\b(kupfer|eisen|zink|silber|lithium)\s+ionen?\b/g, '$1ionen')
    .replace(/\b([a-z]{1,3})\((\d)([+-])\)/g, '$1$2$3')
    .replace(/\+?(\bii?i?v?\b)/g, (match, roman) => (romanMap[roman] ? match.replace(roman, romanMap[roman]) : match))
    .replace(/[^a-z0-9+\-/ ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function keywordMatches(answer, keyword) {
  const normalizedKeyword = normalizeCriteriaText(keyword);
  if (answer.includes(normalizedKeyword)) return true;
  const parts = normalizedKeyword.split(' ').filter((part) => part.length > 2);
  return parts.length > 1 && parts.every((part) => answer.includes(part));
}

export function criterionMatches(answer, criterion) {
  const normalizedAnswer = normalizeCriteriaText(answer);

  if (criterion.matchMode === 'allGroups') {
    return (criterion.keywordGroups || []).every((group) =>
      group.some((keyword) => keywordMatches(normalizedAnswer, keyword)),
    );
  }

  if (criterion.matchMode === 'atLeastGroups') {
    const required = criterion.requiredGroups ?? 1;
    const hits = (criterion.keywordGroups || []).filter((group) =>
      group.some((keyword) => keywordMatches(normalizedAnswer, keyword)),
    ).length;
    return hits >= required;
  }

  const keywords = criterion.keywords || [];
  const matches = keywords.map((keyword) => keywordMatches(normalizedAnswer, keyword));

  if (criterion.matchMode === 'all') {
    return matches.every(Boolean);
  }

  return matches.some(Boolean);
}
