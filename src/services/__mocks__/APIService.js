const pokemonList = {
  results: [{
      name: 'pikachu'
  },{
      name: 'raichu'
  }],
  next: 'nextURL'
}

const pokemonInfo = {
  name: 'pikachu'
}

export class APIService {
  static getPokemonList(url) {
    return new Promise((resolve, reject) => {
      resolve(pokemonList)
    });
  }

  static async getPokemonInfo(url) {
    return new Promise((resolve, reject) => {
      process.nextTick(() => {
        resolve(pokemonInfo)
      });
    });
  }
}