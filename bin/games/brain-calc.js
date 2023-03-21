#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getRandomNumber } from "../getRandomNumber.js";

var name = readlineSync.question("May I have your name? ");
const greet = `${"Hello, "}${name}${"!"}`
console.log(greet);
const question = `${'What is the result of the expression?'}`;
console.log(question);


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

const funcGame = () => {
    let count = 0;
    while (count < 3) {
        const operator = ['+', '-', '*'];
        const getRandomSign = operator[Math.floor(Math.random() * operator.length)];
        const num1 = getRandomNumber(1, 10);
        const num2 = getRandomNumber(1, 10);
        const question = `${num1} ${getRandomSign} ${num2}`;
        const answer = String(resultExpression(num1, num2, getRandomSign));
        const questionUser = `${'Question: '}${question}`;
        console.log(questionUser);
        const answerUser = readlineSync.question('Your answer: ');
        if (answer !== answerUser) {
            console.log(`${answerUser}${' is wrong answer ;(. Correct answer was '}${answer}${'.'}\n${'Let\'s try again, '}${name}`);
            break;
        } else {
            console.log('Correct!');
            count += 1;
        }
    } if (count === 3) {
        console.log(`${'Congratulations '}${name}${'!'}`)
    }
};

funcGame();