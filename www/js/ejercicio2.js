"use strict";

import { formatTime } from "./helpers.js";

console.log("Comienza el tiempo de ejecución");

let time = 0;

const crono = setInterval(() => {
  time++;
}, 1000);

const imprimir = setInterval(() => {
  console.log(
    `El programa se ejecuta desde hace ${formatTime(time).dias} días, ${
      formatTime(time).horas
    } horas, ${formatTime(time).minutos} minutos, ${
      formatTime(time).segundos
    } segundos.`
  );
}, 5000);
