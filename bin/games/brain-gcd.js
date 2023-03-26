#!/usr/bin/env node
import { getRandomNumber } from "../getRandomNumber.js";
import { runGame } from "../../src/index.js";

const discription = 'Find the greatest common divisor of given numbers.';

const resultExpression = (a, b) => {
    let c;
    while (b !== 0) {
        c = b;
        b = a % b;
        a = c;
    }
    return a;
};

const gameFunction = () => {
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 20);
    const question = `${num1} ${num2}`;
    const rightAnswer = String(resultExpression(num1, num2));
    return [question, rightAnswer];
};

const startGame = () => {
    runGame(discription, gameFunction);
}

startGame();
