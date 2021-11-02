const frutas = ["Banana", "Laranja", "Maça", "Manga"];
const fLen = frutas.length;
const text = "<ul>";
for (i = 0; i < fLen; i++) {
  console.log(frutas[i])
}

frutas.push("Limão");  // acrescenta o novo elemento (limão) às frutas


const aposentada = [[1960, 2005], [1945, 2008], [1938, 1999]];

function sum(x, y) {
  return x + y;
}

console.log(sum(...aposentada))