"use strict";

const ps = document.querySelectorAll("p");

const textos = [];

const nuevoTexto = [];

for (const p of ps) {
  textos.push(p.textContent.split(' '));
}

for (let j = 0; j < textos.length; j++) {
  for (let i = 0; i < textos[j].length; i++) {
    if (textos[j][i].length > 5) textos[j][i] = `<em>${textos[j][i]}</em>`;
  }
  nuevoTexto[j] = textos[j].join(" ");
}

for (let i = 0; i < ps.length; i++) {
  ps[i].innerHTML = nuevoTexto[i];
}
