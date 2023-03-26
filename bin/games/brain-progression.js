#!/usr/bin/env node
import { getRandomNumber } from "../getRandomNumber.js";
import { runGame } from "../../src/index.js";

const discription = 'What number is missing in the progression?';

const gameFunction = () => {
    let result = [];
    let randomNumber = getRandomNumber(0, 50);
    let count = getRandomNumber(2, 5);
    for (let i = 0; i < 10; i += 1) {
        result.push(randomNumber);
        randomNumber += count;
    }
    let index = getRandomNumber(1, 10);
    const rigthAnswer = String(result[index]);
    const hideNumber = '..';
    result[index] = hideNumber;
    const question = String(result);
    return [question, rigthAnswer];
};

const startGame = () => {
    runGame(discription, gameFunction);
}

startGame();
