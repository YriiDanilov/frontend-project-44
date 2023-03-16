import readlineSync from "readline-sync";

const askName = () => {
  var name = readlineSync.question("May I have your name? ");
  console.log(`${"Hello, "}${name}${"!"}`);
};

export { askName };
