import {useEffect, useState} from 'react';
import type { NextPage } from 'next';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import {localFavorites} from '../../utils'
import { PokemonFavorite } from '../../components/pokemon'


const Favorites:NextPage = () => {

  const [pokemon, setPokemon] = useState<number[]>([]);

useEffect(() => {
  //si los busco a los pokemons  dentro del useEffect, los busca en el cliene y no en el server
  setPokemon(localFavorites.getFavorites());
}, []);

  return (
    <Layout title='MIS FAVORITOS'> 
      {
        pokemon.length === 0 ?  <NoFavorites /> : <PokemonFavorite pokemonIds={pokemon} />
    }
    </Layout>
    
  )
}

export default Favorites