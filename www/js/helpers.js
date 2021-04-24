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

export { getData, comparador };
