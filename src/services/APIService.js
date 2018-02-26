'use strict';

async function makeRequest (url, method = {}) {
  const request = new Request(url, {
    method: method
  });
  return await (await fetch(request)).json();
};

function buildPokemonInfoObject(baseInfo, speciesInfo, url) {
  const enFlavorText = speciesInfo.flavor_text_entries.find(entry => {return entry.language.name === 'en'}).flavor_text;
  return {
    url: url,
    id: baseInfo.id,
    name: baseInfo.name[0].toUpperCase() + baseInfo.name.slice(1),
    genera: speciesInfo.genera[2].genus,
    height: baseInfo.height,
    weight: baseInfo.weight,
    sprite: {
      front: baseInfo.sprites.front_default,
      back: baseInfo.sprites.back_default
    },
    flavorText: enFlavorText,
    stats: {
      SPEED: baseInfo.stats[0].base_stat,
      SPECIAL_DEFENSE: baseInfo.stats[1].base_stat,
      SPECIAL_ATTACK: baseInfo.stats[2].base_stat,
      DEFENSE: baseInfo.stats[3].base_stat,
      ATTACK: baseInfo.stats[4].base_stat,
      HP: baseInfo.stats[5].base_stat
    },
    types: baseInfo.types.map(record => { return record.type.name}),
    bulbapediaArticle: `https://bulbapedia.bulbagarden.net/wiki/${baseInfo.name}_(Pokemon)`
  }
}

export class APIService {
  static getPokemonList(url) {
    return makeRequest(url, 'GET');
  }

  static async getPokemonInfo(url) {
    const baseInfo = await makeRequest(url, 'GET');
    const speciesInfo = await makeRequest(baseInfo.species.url, 'GET');
    return buildPokemonInfoObject(baseInfo, speciesInfo, url);
  }
}