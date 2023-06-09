import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

const resultExpression = (num1, num2, getRandomSign) => {
  let expression = 0;
  switch (getRandomSign) {
    case '+':
      expression = num1 + num2;
      break;
    case '-':
      expression = num1 - num2;
      break;
    case '*':
      expression = num1 * num2;
      break;
    default:
  }
  return expression;
};

const getAnswerAndQuestion = () => {
  const getRandomSign = operator[Math.floor(Math.random() * operator.length)];
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const question = `${num1} ${getRandomSign} ${num2}`;
  const rightAnswer = String(resultExpression(num1, num2, getRandomSign));
  return [question, rightAnswer];
};

const brainCalc = () => {
  runGame(discription, getAnswerAndQuestion);
};

export default brainCalc;
