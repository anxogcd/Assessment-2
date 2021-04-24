"use strict";

import { getData, comparador } from "./helpers.js";

const urlApi = "https://rickandmortyapi.com/api/";
const month = "December";

console.log(`Cargando los nombres de los personajes del mes de ${month}...`);

async function buscaMes(mes) {
  const capitulosMes = [];
  let urlEpisodes = `${urlApi}/episode`;
  while (urlEpisodes !== null) {
    const episodes = await getData(urlEpisodes);
    episodes.results.forEach((e) => {
      if (e.air_date.startsWith(mes)) {
        capitulosMes.push(e);
      }
    });
    urlEpisodes = episodes.info.next;
  }
  return capitulosMes;
}

function buscaUrlPersonajes(capitulos) {
  const listaUrlPersonajes = [];
  capitulos.forEach((capitulo) => {
    capitulo.characters.forEach((personaje) => {
      listaUrlPersonajes.push(personaje);
    });
  });
  return listaUrlPersonajes;
}

async function obtienePersonajes(urls) {
  const personajes = [];

  for (const url of urls) {
    const personaje = await getData(url);
    personajes.push(personaje);
  }

  return personajes;
}

function obtieneNombres(personajes) {
  const listaNombres = [];
  personajes.forEach((personaje) => listaNombres.push(personaje.name));
  const listaLimpia = comparador(listaNombres);
  return listaLimpia;
}


const episodios = await buscaMes(month);

const urls = buscaUrlPersonajes(episodios);

const personajes = await obtienePersonajes(urls);

const nombres = obtieneNombres(personajes);


console.log(nombres);
