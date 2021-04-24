"use strict";

let time = 0;

const crono = setInterval(() => {
  time += 1;
}, 1000);

const printInterval = setInterval(() => {
  printTime();
}, 5000);

function printTime() {
  let segundos = time % 60;
  let minutos = Math.floor((time / 60) % 60);
  let horas = Math.floor((time / 3600) % 24);
  let dias = Math.floor(time / 86400);
  console.log(
    `El programa se ejecuta desde hace ${dias} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos`
  );
}
