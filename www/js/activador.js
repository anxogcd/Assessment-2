"use strict";

// CON ESTE ARCHIVO SE ACTIVAN LOS EJERCICIOS EN LA MISMA PÁGINA INDEX.HTML
// LOS CÓDIGOS FUENTE DE CADA EJERCICIO ESTÁN EN CADA ARCHIVO POR SEPARADO

const botones = document
  .querySelector("#activadores")
  .querySelectorAll("button");

const modulos = document.querySelector("#modules");

botones[0].addEventListener("click", activar1);
botones[1].addEventListener("click", activar2);
botones[2].addEventListener("click", activar3);
botones[3].addEventListener("click", activar4);
botones[4].addEventListener("click", activar5);
botones[5].addEventListener("click", activar6);
botones[6].addEventListener("click", activar7);
botones[7].addEventListener("click", activar8);

function activar1() {
  borrarModulos();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/js/ejercicio1.js";
  modulos.append(script);
}

function activar2() {
  borrarModulos();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/js/ejercicio2.js";
  modulos.append(script);
}

function activar3() {
  borrarModulos();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/js/ejercicio3.js";
  modulos.append(script);
}

function activar4() {
  borrarModulos();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/js/ejercicio4.js";
  modulos.append(script);
}

function activar5() {
  borrarModulos();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/js/ejercicio5.js";
  modulos.append(script);
}
function activar6() {
  borrarModulos();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/js/ejercicio6.js";
  modulos.append(script);
}

function activar7() {
  borrarModulos();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/js/ejercicio7.js";
  modulos.append(script);
}

function activar8() {
  borrarModulos();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/js/ejercicio8.js";
  modulos.append(script);
}

function borrarModulos() {
  modulos.innerHTML = "";
}
