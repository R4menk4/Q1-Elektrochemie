import { normalizeChemicalAnswer, splitNormalizedSides } from './normalizeChemicalAnswer.js';

export function checkAnswer(exercise, userAnswer) {
  if (exercise.type === 'zuordnung') {
    return checkPairs(exercise, userAnswer);
  }

  if (exercise.type === 'koeffizienten' && Array.isArray(userAnswer)) {
    return checkBlanks(exercise, userAnswer);
  }

  const normalizedUserAnswer = normalizeChemicalAnswer(userAnswer);
  const acceptedAnswers = [exercise.answer, ...(exercise.acceptedAnswers ?? [])];
  const isCorrect = acceptedAnswers.some(
    (answer) => normalizeChemicalAnswer(answer) === normalizedUserAnswer,
  );

  if (isCorrect) {
    return {
      status: 'correct',
      message: 'Richtig! Die Elektronen sind vollständig ausgeglichen.',
    };
  }

  if (isPartlyCorrect(exercise.answer, userAnswer)) {
    return {
      status: 'partial',
      message: 'Fast richtig. Prüfe noch einmal die Anzahl der Elektronen, Koeffizienten oder den Pfeil.',
    };
  }

  return {
    status: 'wrong',
    message: getHelpfulWrongMessage(exercise.type),
  };
}

function checkBlanks(exercise, userAnswer = []) {
  const correctBlanks = exercise.correctBlanks ?? [];
  const correctCount = correctBlanks.filter(
    (blank, index) => normalizeChemicalAnswer(blank) === normalizeChemicalAnswer(userAnswer[index]),
  ).length;

  if (correctCount === correctBlanks.length) {
    return {
      status: 'correct',
      message: 'Richtig! Die Koeffizienten gleichen die Elektronen vollständig aus.',
    };
  }

  if (correctCount > 0) {
    return {
      status: 'partial',
      message: 'Teilweise richtig. Prüfe, welche Koeffizienten für den Elektronenausgleich zusammengehören.',
    };
  }

  return {
    status: 'wrong',
    message: 'Noch nicht richtig. Beginne mit der Elektronenanzahl der Oxidation und Reduktion.',
  };
}

function checkPairs(exercise, selectedPairs = {}) {
  const pairs = exercise.pairs ?? [];
  const correctCount = pairs.filter(
    (pair) => selectedPairs[pair.equation] === pair.correctType,
  ).length;

  if (correctCount === pairs.length) {
    return {
      status: 'correct',
      message: 'Richtig! Du hast Elektronenabgabe und Elektronenaufnahme richtig zugeordnet.',
    };
  }

  if (correctCount > 0) {
    return {
      status: 'partial',
      message: 'Teilweise richtig. Achte darauf: Elektronen rechts bedeutet Oxidation, Elektronen links bedeutet Reduktion.',
    };
  }

  return {
    status: 'wrong',
    message: 'Noch nicht richtig. Prüfe, wo die Elektronen stehen.',
  };
}

function isPartlyCorrect(correctAnswer, userAnswer) {
  const normalizedUser = normalizeChemicalAnswer(userAnswer);
  if (!normalizedUser) return false;

  if (/^\d+$/.test(normalizedUser)) {
    return false;
  }

  const correctSides = splitNormalizedSides(correctAnswer);
  const importantParts = [...correctSides.left, ...correctSides.right].filter(
    (part) => part !== 'electron',
  );
  const matchingParts = importantParts.filter((part) => normalizedUser.includes(part));

  return matchingParts.length >= Math.ceil(importantParts.length / 2);
}

function getHelpfulWrongMessage(type) {
  if (type === 'reduktion') {
    return 'Noch nicht richtig. Achte darauf, dass bei der Reduktion Elektronen aufgenommen werden.';
  }

  if (type === 'oxidation') {
    return 'Noch nicht richtig. Achte darauf, dass bei der Oxidation Elektronen abgegeben werden.';
  }

  if (type === 'elektronenanzahl') {
    return 'Noch nicht richtig. Zähle, wie viele Elektronen abgegeben und aufgenommen werden müssen.';
  }

  return 'Noch nicht richtig. Prüfe die Teilchen auf beiden Seiten und achte auf die Elektronenbilanz.';
}
