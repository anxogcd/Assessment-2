"use strict";

const boton = document.querySelectorAll("button");
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

boton[0].addEventListener("click", handleCreate);

boton[1].addEventListener("click", handleReset);

setInterval(() => changeColors(), 1000);
