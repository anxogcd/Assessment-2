"use strict";

function aBinario(num) {
  let resto = 0;
  let binario = [];
  while (num >= 1) {
    resto = num % 2;
    num = Math.floor(num / 2);
    binario.unshift(resto);
  }
  return binario.join("");
}

function aDecimal(num) {
  const decimal = num.toString().split("");
  let resultado = 0;
  let j = 0;
  for (let i = decimal.length; i > 0; i--) {
    if (decimal[i - 1] > 1)
      console.error("El número introducido no es binario");
    resultado += decimal[i - 1] * 2 ** j;
    j++;
  }
  return resultado;
}

const direction = prompt(
  "Presiona 'd' si quieres convertir a decimal. Presiona 'b' si quieres convertir a binario"
);

const numero = prompt("Introduce el número que deseas convertir");

if (isNaN(numero) || numero <0) console.error("Lo que has introducido no es un número válido");

switch (direction) {
  case "d":
    console.log(aDecimal(numero));
    break;
  case "b":
    console.log(aBinario(numero));
    break;
  default:
    console.error("No has introducido una letra correcta");
}
