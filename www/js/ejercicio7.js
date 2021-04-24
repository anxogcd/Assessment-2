"use strict";

const botonAñadir = document.querySelector('#añadirCuadrado');
const botonEliminar = document.querySelector('#borrarCuadrados')
const contenedor = document.querySelector("#contenedor");

function randomRGBA() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const a = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function addDiv() {
  const div = document.createElement("div");
  div.id = 'cuadrado'
  div.style.backgroundColor = randomRGBA();
  contenedor.append(div);
}

function handleCreate() {
  addDiv();
}

function handleReset() {
  contenedor.innerHTML = "";
}

function changeColors() {
  const divs = contenedor.childNodes;
  divs.forEach((div) => (div.style.backgroundColor = randomRGBA()));
}

botonAñadir.addEventListener("click", handleCreate);

botonEliminar.addEventListener("click", handleReset);

setInterval(() => changeColors(), 1000);
