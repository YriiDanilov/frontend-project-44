#!/usr/bin/env node
import { getRandomNumber } from "../getRandomNumber.js";
import { runGame } from "../../src/index.js";

const discription =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
    if (number === 1) {
        return false;
    }
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const gameFunction = () => {
    const question = getRandomNumber(1, 100);
    const rigthAnswer = isPrime(question) ? "yes" : "no";
    return [question, rigthAnswer];
};

const brainPrime = () => {
    runGame(discription, gameFunction);
};

export default brainPrime;
