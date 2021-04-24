"use strict";

import { getData } from "./helpers.js";

const num = prompt("¿Cuantos usuarios quieres obtener?");
if (isNaN(num) || num < 1) {
  alert("Lo que has introducido no es un número válido");
}

console.log(
  "Cargando usuarios... si has puesto un número muy grande puede tardar un rato"
);

async function getUser(num) {
  const users = [];
  const urlApi = "https://randomuser.me/api/";
  for (let i = 0; i < num; i++) {
    const user = {};
    const response = await getData(urlApi);
    user.username = response.results[0].login.username;
    user.first = response.results[0].name.first;
    user.last = response.results[0].name.last;
    user.gender = response.results[0].gender;
    user.country = response.results[0].location.country;
    user.email = response.results[0].email;
    user.picture = response.results[0].picture.large;
    users.push(user);
  }
  return users;
}

getUser(num)
  .then((r) => console.log(r))
  .catch((e) => e);
