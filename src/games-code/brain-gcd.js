#!/usr/bin/env node
import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'Find the greatest common divisor of given numbers.';

const resultExpression = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  } else if (a > b) {
    return resultExpression(a - b, b);
  }
  return resultExpression(a, b - a);
};

const gameFunction = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(resultExpression(num1, num2));
  return [question, rightAnswer];
};

const brainGcd = () => {
  runGame(discription, gameFunction);
};

export default brainGcd;
