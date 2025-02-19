const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva seu nome: ", (nome) =>
  rl.question("Digite seu sexo: ", (sexo) =>
    rl.question("Digite o valor da sua compra: ", (valor) => {
      if (sexo === "feminino" || "FEMININO") {
        let descontoF = parseInt(valor) * 0.87;
        console.log(
          `Pelo dia da mulher você receberá um desconto, saindo de ${valor} para ${descontoF}`
        );
      } else if (sexo === "masculino" || "MASCULINO") {
        let descontoH = parseInt(valor) * 0.95;
        console.log(
          `O valor total da sua compra sairá com um pequeno desconto de 5%, sua compra sairá de ${valor} para ${descontoH}`
        );
      } else {
        console.log(`Você não informou seus dados corretamente!`);
      }

      rl.close();
    })
  )
);
