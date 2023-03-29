#!/usr/bin/env node
import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'What number is missing in the progression?';

const gameFunction = () => {
    const result = [];
    let randomNumber = getRandomNumber(0, 50);
    const count = getRandomNumber(2, 5);
    for (let i = 0; i < 10; i += 1) {
        result.push(randomNumber);
        randomNumber += count;
    }
    const index = getRandomNumber(1, 10);
    const rigthAnswer = String(result[index]);
    const hideNumber = '..';
    result[index] = hideNumber;
    const question = result.join(' ');
    return [question, rigthAnswer];
};

const brainProgression = () => {
    runGame(discription, gameFunction);
};

export default brainProgression;
