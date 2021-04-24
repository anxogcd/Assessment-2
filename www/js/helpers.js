"use strict";

function getData(url) {
  return fetch(url)
    .then((r) => r.json())
    .catch((e) => e);
}

function comparador(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
}

function formatTime(time) {
  const tiempo = {};
  tiempo.segundos = time % 60;
  tiempo.minutos = Math.floor((time / 60) % 60);
  tiempo.horas = Math.floor((time / 3600) % 24);
  tiempo.dias = Math.floor(time / 86400);

  return tiempo;
}

export { getData, comparador, formatTime };
