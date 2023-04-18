import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'What number is missing in the progression?';
const length = 10;

const getNumbers = () => {
  const result = [];
  let randomNumber = getRandomNumber(0, 50);
  const count = getRandomNumber(2, 5);
  for (let i = 0; i < length; i += 1) {
    result.push(randomNumber);
    randomNumber += count;
  }
  return result;
};

const getSkippedNumberInProgression = () => {
  const index = getRandomNumber(0, length);
  const getProgression = getNumbers();
  const rigthAnswer = String(getProgression[index]);
  const hideNumber = '..';
  getProgression[index] = hideNumber;
  const question = getProgression.join(' ');
  return [question, rigthAnswer];
};

const brainProgression = () => {
  runGame(discription, getSkippedNumberInProgression);
};

export default brainProgression;
