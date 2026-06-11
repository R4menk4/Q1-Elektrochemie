import { useEffect, useMemo, useState } from 'react';

const arrowPattern = /→|->|=>/;
const equationTypes = new Set([
  'gesamtreaktion',
  'oxidation',
  'reduktion',
  'teilreaktionen-gesamt',
  'koeffizienten',
]);

const superscriptToNormal = {
  '⁺': '+',
  '⁻': '-',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
};

const subscriptToNormal = {
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
};

const normalToSuperscript = {
  '+': '⁺',
  '-': '⁻',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
};

const normalToSubscript = {
  1: '₁',
  2: '₂',
  3: '₃',
  4: '₄',
  5: '₅',
  6: '₆',
  7: '₇',
};

export function supportsStructuredEquationInput(exercise) {
  return equationTypes.has(exercise.type);
}

export default function StructuredEquationInput({ exercise, onAnswerChange }) {
  const template = useMemo(
    () => exercise.answerTemplate ?? createTemplateFromAnswer(exercise.answer, exercise.type),
    [exercise.answer, exercise.answerTemplate, exercise.type],
  );
  const [particles, setParticles] = useState(() => createInitialParticles(template));

  useEffect(() => {
    const initialParticles = createInitialParticles(template);
    setParticles(initialParticles);
    onAnswerChange(buildAnswerString(template, initialParticles));
  }, [template, onAnswerChange]);

  function updateParticle(tokenIndex, field, value) {
    setParticles((current) => {
      const next = {
        ...current,
        [tokenIndex]: {
          ...current[tokenIndex],
          [field]: value,
        },
      };
      onAnswerChange(buildAnswerString(template, next));
      return next;
    });
  }

  return (
    <section className="structured-equation" aria-label="Strukturierte chemische Eingabe">
      <p className="structured-equation__hint">
        Trage die Gleichung in die Felder ein. Pluszeichen und Pfeil sind vorgegeben.
      </p>
      <div className="structured-equation__row">
        {template.map((token, index) => {
          if (token.type === 'operator' || token.type === 'arrow') {
            return (
              <span className="equation-fixed" key={`${token.type}-${index}`}>
                {token.value}
              </span>
            );
          }

          const particle = particles[index] ?? token;
          return (
            <ChemicalParticleInput
              key={`${exercise.id}-${index}`}
              index={index}
              token={token}
              particle={particle}
              onChange={updateParticle}
            />
          );
        })}
      </div>
      <ChemicalEquationPreview template={template} particles={particles} />
    </section>
  );
}

function ChemicalParticleInput({ index, token, particle, onChange }) {
  return (
    <span className="particle-input">
      <ParticleField
        className="particle-field--coefficient"
        label="Koeffizient"
        field="coefficient"
        inputMode="numeric"
        placeholder="1"
        index={index}
        token={token}
        particle={particle}
        onChange={onChange}
      />
      <ParticleField
        className="particle-field--formula"
        label="Formel oder Symbol"
        field="formula"
        index={index}
        token={token}
        particle={particle}
        onChange={onChange}
      />
      <ParticleField
        className="particle-field--index"
        label="Index"
        field="index"
        inputMode="numeric"
        placeholder="Index"
        index={index}
        token={token}
        particle={particle}
        onChange={onChange}
      />
      <ParticleField
        className="particle-field--charge"
        label="Ladung"
        field="charge"
        placeholder="Ladung"
        index={index}
        token={token}
        particle={particle}
        onChange={onChange}
      />
    </span>
  );
}

function ParticleField({
  className,
  label,
  field,
  inputMode,
  placeholder,
  index,
  token,
  particle,
  onChange,
}) {
  if (token.lockedFields?.includes(field)) {
    return (
      <span className={`particle-fixed-field ${className}`} aria-label={label}>
        {formatFieldValue(field, particle[field]) || ' '}
      </span>
    );
  }

  return (
    <label className={`particle-field ${className}`}>
      <span className="sr-only">{label}</span>
      <input
        inputMode={inputMode}
        placeholder={placeholder}
        value={particle[field]}
        onChange={(event) => onChange(index, field, event.target.value)}
      />
    </label>
  );
}

function ChemicalEquationPreview({ template, particles }) {
  return (
    <div className="chemical-preview" aria-live="polite">
      <span>Vorschau: </span>
      <strong>{formatAnswerForDisplay(buildAnswerString(template, particles)) || '—'}</strong>
    </div>
  );
}

function createInitialParticles(template) {
  return Object.fromEntries(
    template
      .map((token, index) => {
        if (token.type !== 'particle') return null;
        return [
          index,
          {
            coefficient: token.prefillCoefficient ? token.coefficient : '',
            formula: token.prefillFormula ? token.formula : '',
            index: token.prefillIndex ? token.index : '',
            charge: token.prefillCharge ? token.charge : '',
          },
        ];
      })
      .filter(Boolean),
  );
}

function createTemplateFromAnswer(answer, exerciseType) {
  const normalizedAnswer = answer.replace(arrowPattern, ' → ');
  const rawTokens = normalizedAnswer.split(/\s+/).filter(Boolean);
  const template = [];

  for (let i = 0; i < rawTokens.length; i += 1) {
    const token = rawTokens[i];

    if (token === '+') {
      template.push({ type: 'operator', value: '+' });
      continue;
    }

    if (token === '→') {
      template.push({ type: 'arrow', value: '→' });
      continue;
    }

    if (/^\d+$/.test(token) && rawTokens[i + 1] && !['+', '→'].includes(rawTokens[i + 1])) {
      template.push(createParticleToken({ ...parseParticle(rawTokens[i + 1]), coefficient: token }, exerciseType));
      i += 1;
      continue;
    }

    template.push(createParticleToken(parseParticle(token), exerciseType));
  }

  return template;
}

function createParticleToken(particle, exerciseType) {
  const coefficientTask = exerciseType === 'koeffizienten';

  return {
    ...particle,
    prefillFormula: coefficientTask,
    prefillCoefficient: false,
    prefillIndex: coefficientTask,
    prefillCharge: coefficientTask,
    lockedFields: coefficientTask ? ['formula', 'index', 'charge'] : [],
  };
}

function parseParticle(value) {
  const normalized = normalizeParticleText(value);
  const chargeMatch = normalized.match(/(\d?[+-])$/);
  const charge = chargeMatch ? chargeMatch[1] : '';
  const withoutCharge = charge ? normalized.slice(0, -charge.length) : normalized;
  const indexMatch = withoutCharge.match(/(\d+)$/);
  const index = indexMatch ? indexMatch[1] : '';
  const formula = index ? withoutCharge.slice(0, -index.length) : withoutCharge;

  return {
    type: 'particle',
    coefficient: '',
    formula,
    index,
    charge,
    prefillFormula: false,
    prefillCoefficient: false,
    prefillIndex: false,
    prefillCharge: false,
    lockedFields: [],
  };
}

function normalizeParticleText(value) {
  return value
    .replace(/[⁺⁻¹²³⁴⁵⁶⁷]/g, (char) => superscriptToNormal[char] ?? char)
    .replace(/[₁₂₃₄₅₆₇]/g, (char) => subscriptToNormal[char] ?? char);
}

function buildAnswerString(template, particles) {
  return template
    .map((token, index) => {
      if (token.type === 'operator') return '+';
      if (token.type === 'arrow') return '->';

      const particle = particles[index] ?? {};
      return buildParticleString(particle);
    })
    .filter(Boolean)
    .join(' ');
}

function buildParticleString(particle) {
  const coefficient = cleanValue(particle.coefficient);
  const formula = cleanValue(particle.formula);
  const index = cleanValue(particle.index);
  const charge = cleanValue(particle.charge);

  if (!formula) return '';

  const coefficientText = coefficient && coefficient !== '1' ? `${coefficient} ` : '';
  const particleText = `${formula}${index}${charge}`;
  return `${coefficientText}${particleText}`;
}

function cleanValue(value = '') {
  return String(value).trim();
}

function formatFieldValue(field, value = '') {
  if (field === 'formula') {
    return String(value).replace(/[1234567]/g, (char) => normalToSubscript[char] ?? char);
  }

  if (field === 'index') {
    return String(value).replace(/[1234567]/g, (char) => normalToSubscript[char] ?? char);
  }

  if (field === 'charge') {
    return String(value).replace(/[1234567+-]/g, (char) => normalToSuperscript[char] ?? char);
  }

  return value;
}

function formatAnswerForDisplay(answer) {
  return answer
    .replace(/->/g, '→')
    .split(' ')
    .map((part) => {
      if (part === '+' || part === '→' || /^\d+$/.test(part)) return part;
      return formatParticle(part);
    })
    .join(' ');
}

function formatParticle(part) {
  return part
    .replace(/([A-Za-z]+)(\d+)(?![+-])/g, (_, formula, number) => `${formula}${number.replace(/[1234567]/g, (char) => normalToSubscript[char] ?? char)}`)
    .replace(/(\d?)([+-])$/g, (_, number, sign) => {
      const chargeNumber = number ? normalToSuperscript[number] ?? number : '';
      return `${chargeNumber}${normalToSuperscript[sign] ?? sign}`;
    });
}
