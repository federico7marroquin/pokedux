import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { fetchPokemons } from '../../actions';

function Home() {

  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  useEffect(() => {
    console.log('useEffect')
    dispatch(fetchPokemons())
  }, [dispatch])


  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
