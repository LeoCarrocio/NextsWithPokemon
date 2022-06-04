import { FC} from 'React';

import {GetStaticPaths, GetStaticProps} from 'next';

import { Layout } from '../../components/layouts';
import { Pokemon, PokemonNumber } from '../../interfaces';
import { pokeApi } from '../../api';

import { PokemonPageUi } from '../../components/pokemon';

import {getInfoPokemons} from '../../utils'



interface PokemonPageProps {
  pokemon:Pokemon
}

export const PokemonByNamePage:FC<PokemonPageProps> = ({pokemon}) => {
  
  return (
    <Layout title={pokemon.name}> 
      <PokemonPageUi pokemon={pokemon} />
    </Layout>
  )
}

// ejecuta esto en build de la app, simpre y cundo no hay query params  x ejemplo =>[?id=1]
export const getStaticPaths:GetStaticPaths = async () => {
 
  // con esto creo mis 151 arreglos para mis 151 pokemons
  const { data } =  await pokeApi.get<PokemonNumber>('/pokemon?limit=151')
  const pokemons: string[] = data.results.map((poke) => poke.name )

  // y aca creo mis 151 paths y lo paso x parametro el mane es el nombre de la pagina
  return{
    paths: pokemons.map( name => ({params: {name}})),
    fallback:false 
  }
}

// se ejecuta solo una ves en build time de la app, en este caso se ejecuta depues de getStaticPaths, le llegan los argumentos creados de la app
//  anteriormente
export const getStaticProps : GetStaticProps = async ({params}) => { 

  const {name} = params as {name: string}

  return {
    props: {
      pokemon : await getInfoPokemons(name)
    }
  }
}

export default PokemonByNamePage