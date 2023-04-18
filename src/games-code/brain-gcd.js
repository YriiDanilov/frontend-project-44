import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }
  if (a > b) {
    return getGcd(a - b, b);
  }
  return getGcd(a, b - a);
};

const getAnswerAndQuestion = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(getGcd(num1, num2));
  return [question, rightAnswer];
};

const brainGcd = () => {
  runGame(discription, getAnswerAndQuestion);
};

export default brainGcd;
