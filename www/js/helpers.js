"use strict";

function getData(url) {
  return fetch(url)
    .then((r) => r.json())
    .catch((e) => e);
}

export { getData };
