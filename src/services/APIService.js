'use strict';

const makeRequest = async (url, method = {}) => {
  const request = new Request(url, {
    method: method
  });
  return await (await fetch(request)).json();
};

export class APIService {
  static getPokemonList(url) {
    return makeRequest(url, 'GET');
  }
}