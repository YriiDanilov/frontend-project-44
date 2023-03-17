#!/usr/bin/env node
import readlineSync from "readline-sync";

const brainGames = () => {
    var name = readlineSync.question("May I have your name? ");
    console.log(`${"Hello, "}${name}${"!"}`);
    var count = 0;
    console.log(`${'Answer "yes" if the number is even, otherwise answer "no".'}`);

    while (count < 3) {
        var number = Math.floor(Math.random() * 101);
        var question = readlineSync.question(`${'Question: '}${number} `);
        if (number % 2 !== 0 && question === 'no' || number % 2 === 0 && question === 'yes') {
            console.log(`${'You answer: '} ${question}\n${'Correct!'}`);
            count += 1;
        } else if (number % 2 !== 0 && question === 'yes') {
            console.log(`${'"yes" is wrong answer ;( .Correct answer was "no" Let\'s try again, '}${name}${'!'}`)
            break;
        } else if (number % 2 === 0 && question === 'no') {
            console.log(`${'"no" is wrong answer ;( .Correct answer was "yes" Let\'s try again, '}${name}${'!'}`)
            break;
        } else {
            console.log(`${question}${' is wrong answer ;( .Correct answer was "yes or no" Let\'s try again, '}${name}${'!'}`)
            break;
        }
    };
    if (count === 3) {
        console.log(`${'Congratulations, '}${name}${'!'}`);
    }
};

brainGames();

