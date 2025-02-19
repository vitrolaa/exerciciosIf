const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva o ano: ", (ano) => {
  if (ano / 4) {
    console.log(`O ano é bissesto: ${ano}`);
  } else {
    console.log(`O ano ${ano} nao é bissesto`);
  }

  rl.close();
});
