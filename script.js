let vitorias = 9;
let derrotas = 10;

function calcularSaldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

let saldoVitorias = calcularSaldoVitorias(vitorias, derrotas);


let nivel = nivelDoJogador(vitorias)

function nivelDoJogador(vitorias) {
  let nivel = "";

  if (vitorias <= 10) {
    nivel = "Ferro";
  }else if(vitorias <= 20){
    nivel = "Bronze";
  }else if (vitorias <= 50){
    nivel = "Prata";
  }else if (vitorias <= 80){
    nivel = "Ouro";
  }else if (vitorias <= 90){
    nivel = "Diamante";
  }else if (vitorias <= 100){
    nivel = "Lendário";
  }else{
    nivel = "Imortal";
  }

  return nivel;
}

console.log("O Héroi tem saldo de " + saldoVitorias + " está no nível de " + nivel)