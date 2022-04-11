import axiosInstance from "./config";
export function getPokemons(limit = 151) {
    return axiosInstance.get(`/pokemon?limit=${limit}&offset=0`)
        .then(response => response.data)
        .catch(err => console.error(err))
}

export function getPokemonsWithDetails() {
    return getPokemons().then(data => {
        const pokemonList = data.results
        return Promise.all(pokemonList.map(pokemon => axiosInstance.get(pokemon.url)))

    }).then(pokemonResponse => {
        return pokemonResponse.map(response => response.data)

    })
}