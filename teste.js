//retorna data atual
const dataAtual = new Date();
const dataformatada = dataAtual.toLocaleDateString();

const horas = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();
console.log(`${dataformatada}` + " as " + `${horas}` + ":" + `${minutos}` + ":" + `${segundos}`)