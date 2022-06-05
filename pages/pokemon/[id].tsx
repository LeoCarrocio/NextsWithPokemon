import { FC} from 'React';

import {GetStaticPaths, GetStaticProps} from 'next';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { pokeApi } from '../../api';

import { PokemonPageUi } from '../../components/pokemon';

import {getInfoPokemons} from '../../utils'


interface PokemonPageProps {
  pokemon:Pokemon
}

export const PokemonPage:FC<PokemonPageProps> = ({pokemon}) => {
  
  return (
    <Layout title={pokemon.name}> 
      <PokemonPageUi pokemon={pokemon} />
    </Layout>
  )
}

// ejecuta esto en build de la app, simpre y cundo no hay query params  x ejemplo =>[?id=1]
export const getStaticPaths:GetStaticPaths = async () => {
 
  // con esto creo mis 151 arreglos para mis 151 pokemons, si fueran productos serian la cantidad de la cantidad
  // productos para cada pagina 
  const pokemons151 = [...Array(151)].map((value, index) =>`${index + 1}`)

  // y aca creo mis 151 paths y lo paso x parametro 
  return{
    paths: pokemons151.map(id => ({params: {id}})),
    //fallback:false // si los ids q pide exece la app no muestra nada
    fallback:'blocking' // para q genera un ids nuevo cuando no existe el id q pide en el llamado original de la app
  }
}

// se ejecuta solo una ves en build time de la app, en este caso se ejecuta depues de getStaticPaths, le llegan los argumentos creados de la app
//  anteriormente
export const getStaticProps : GetStaticProps = async ({params}) => { 

  const {id} = params as {id: string}

  const pokemon =  await getInfoPokemons(id) // funcion que me trae los datos que quiero de la api
  // cuando el pokemon no exista lo redirecciono a la home 
  if(!pokemon){
    return{
      redirect:{
        pathname:'/',
        permanent:false // lo pongo en false porque puede ser q luego exista el pokemon pero hoy no 
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 85430 // esto es para que el cliente sepa que hay que volver a pedir los datos en determinados segundos se vuelve a generar la pagina 
  }
}

export default PokemonPage