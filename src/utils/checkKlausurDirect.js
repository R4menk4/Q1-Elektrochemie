import { normalizeChemicalAnswer } from './normalizeChemicalAnswer.js';
import { normalizeCriteriaText } from './checkCriteria.js';

function normalizeDirect(value) {
  return normalizeCriteriaText(value)
    .replace(/\s+/g, '')
    .replace(/^plus/, '+')
    .replace(/^minus/, '-');
}

function normalizeOxidationNumber(value) {
  return normalizeDirect(value)
    .replace(/-iii/g, '-3')
    .replace(/-ii/g, '-2')
    .replace(/-i/g, '-1')
    .replace(/\+?i{1,3}/g, (match) => {
      const sign = match.startsWith('+') ? '+' : '';
      return `${sign}${match.replace('+', '').length}`;
    });
}

export function directValueMatches(value, accepted = []) {
  const user = normalizeDirect(value);
  const chemicalUser = normalizeChemicalAnswer(value);

  return accepted.some((candidate) => {
    const directCandidate = normalizeDirect(candidate);
    return (
      user === directCandidate ||
      normalizeOxidationNumber(value) === normalizeOxidationNumber(candidate) ||
      chemicalUser === normalizeChemicalAnswer(candidate)
    );
  });
}

export function directFieldState(value, accepted = []) {
  if (String(value ?? '').trim() === '') return 'empty';
  return directValueMatches(value, accepted) ? 'correct' : 'wrong';
}

export function directTaskIsCorrect(subtask, answer) {
  if (subtask.type === 'choiceGroup') {
    return Object.entries(subtask.correctValues || {}).every(([key, value]) => answer?.[key] === value);
  }

  if (subtask.type === 'multiSelect') {
    return [...(answer || [])].sort().join('|') === [...(subtask.correctAnswers || [])].sort().join('|');
  }

  if (subtask.type === 'calculation') {
    return (subtask.fields || []).every((field) => {
      const user = Number(String(answer?.[field.id] || '').replace(',', '.').replace(/[^\d.+-]/g, ''));
      return Math.abs(user - field.correctValue) <= (subtask.tolerance ?? 0.01);
    });
  }

  if (subtask.type === 'structuredFields' || subtask.type === 'structuredElectrodeAssignment') {
    return (subtask.fields || []).every((field) => directValueMatches(answer?.[field.id], field.correctValues || []));
  }

  if (subtask.type === 'oxidationNumberTable' || subtask.type === 'oxidationNumberEquation') {
    return (subtask.inputConfig?.rows || []).every((row, rowIndex) =>
      Object.entries(row.accepted || {}).every(([element, accepted]) =>
        directValueMatches(answer?.[`${rowIndex}:${element}`] ?? '', accepted),
      ),
    );
  }

  if (subtask.type === 'structuredEquation') {
    return (subtask.scaffold?.equations || []).every((equation, index) =>
      directValueMatches(answer?.[index] || '', [equation.expected, ...(equation.accepted || [])]),
    );
  }

  return false;
}
