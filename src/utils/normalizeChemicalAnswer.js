const superscriptMap = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '⁺': '+',
  '⁻': '-',
};

const subscriptMap = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
};

export function normalizeChemicalAnswer(value = '') {
  return value
    .trim()
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, (char) => superscriptMap[char] ?? char)
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (char) => subscriptMap[char] ?? char)
    .replace(/\^/g, '')
    .replace(/e\s*-/gi, 'electron')
    .replace(/=>|->|→/g, '>')
    .replace(/–|—/g, '-')
    .replace(/\s+/g, '')
    .replace(/([A-Za-z][A-Za-z0-9]*)([+-])([23])(?=$|[+>])/g, '$1$3$2')
    .replace(/([A-Za-z][A-Za-z0-9]*)1([+-])(?=$|[+>])/g, '$1$2')
    .toLowerCase();
}

export function splitNormalizedSides(value = '') {
  const normalized = normalizeChemicalAnswer(value);
  const [left = '', right = ''] = normalized.split('>');

  return {
    left: left.split('+').filter(Boolean),
    right: right.split('+').filter(Boolean),
  };
}
