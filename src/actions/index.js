import { SET_POKEMON, SET_ERROR, CLEAN_ERROR, FETCH_POKEMONS } from "./types";


export const setPokemons = (payload) => ({
    type: SET_POKEMON, payload
})

export const setError = (payload) => ({
    type: SET_ERROR, payload
})

export const cleanError = (payload) => ({
    type: CLEAN_ERROR, payload
})


//redux thunk: funcion que devuelve otra función, 
//redux  saga: funciones generadoras

export const fetchPokemons = () => ({
    type: FETCH_POKEMONS,
})