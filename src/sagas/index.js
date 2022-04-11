import { call, put, takeEvery } from 'redux-saga/effects'
import { setPokemons } from '../actions'
import { FETCH_POKEMONS } from '../actions/types'
import { getPokemonsWithDetails } from '../api/getPokemons'

//generator function
function* fetchPokemonWithDetails() {
    try {
        const pokemonsWithDetails = yield call(getPokemonsWithDetails)
        yield put(setPokemons(pokemonsWithDetails))
    } catch (e) {
        console.error(e)

    }
}

//Cada cuanto va a ejecutar la función
function* pokemonSaga() {
    yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails)
}

export default pokemonSaga