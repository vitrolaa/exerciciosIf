const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a velocidade do carro: ", (velo) => {
  if (parseInt(velo) > 80) {
    let multa = parseInt(velo) - 80;
    let valorCobrado = multa * 5;
    console.log(
      `O veiculo ultrapassou a velocidade limite e sua multa foi de ${valorCobrado}`
    );
  } else {
    console.log(`O veiculo nao ultrapassou a velocidade limite`);
  }

  rl.close();
});
