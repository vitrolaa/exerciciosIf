const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a sua idade: ", (idade) => {
  if (parseInt(idade) < 18) {
    let anosFalta = 18 - parseInt(idade);
    console.log(`Você ainda nao pode se alistar, falta ${anosFalta} anos`);
  } else {
    let anoPasso = parseInt(idade) - 18;
    console.log(
      `Você pode fazer o alistamento e ja se passou ${anoPasso} anos`
    );
  }

  rl.close();
});
