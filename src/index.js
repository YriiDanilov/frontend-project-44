import readlineSync from "readline-sync";

const runGame = (discritption, gameFunction) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have you name? ');
    console.log(`${'Hello, '}${name}`);
    console.log(discritption);

    const count = 3;
    for (let i = 0; i < count; i += 1) {
        const [question, rigthAnswer] = gameFunction();
        console.log(`${'Question: '}${question}`);
        const answerUser = readlineSync.question('Your answer: ');
        if (rigthAnswer === answerUser) {
            console.log('Correct!');
        } else {
            console.log(`${answerUser}${' is wrong answer ;(. Correct answer was '}${rigthAnswer}${'.'}\n${'Let\'s try again, '}${name}`);
            return;
        }
    }
    console.log(`${'Congratulations, '}${name}${'!'}`);
};

export { runGame };