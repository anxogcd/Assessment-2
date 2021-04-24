"use strict";

import { formatTime } from "./helpers.js";

const dias = document.querySelector("#dias");
const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

const iniciar = document.querySelector("#iniciar");
const parar = document.querySelector("#parar");
const resetear = document.querySelector("#resetear");

let time = 0;
let crono;
let timeObject = {};

function printTime(object) {
  dias.textContent = object.dias;
  horas.textContent = object.horas;
  minutos.textContent = object.minutos;
  segundos.textContent = object.segundos;
}

function iniciarCrono() {
  if (crono === undefined) {
    crono = setInterval(() => {
      time++;
      timeObject = formatTime(time);
      printTime(timeObject);
    }, 1000);
  }
}

function pararCrono() {
  clearInterval(crono);
  crono = undefined;
}

function resetearCrono() {
  time = 0;
  printTime(time);
}

iniciar.addEventListener("click", iniciarCrono);
parar.addEventListener("click", pararCrono);
resetear.addEventListener("click", resetearCrono);
