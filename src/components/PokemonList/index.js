import React from 'react'
import PokemonCard from './PokemonCard'
import { Grid} from 'semantic-ui-react'

import './styles.css';

const PokemonList = ({ pokemons }) => {
console.log("🚀 ~ file: index.js ~ line 8 ~ PokemonList ~ list", pokemons)
    return (
        <Grid className='PokemonList'>
            {pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon} />  )}
        </Grid>
    )
}

PokemonList.defaultProps = {
    pokemons: []
}

export default PokemonList;