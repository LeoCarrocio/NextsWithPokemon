import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon} from '../interfaces';
import { PokemonCard } from '../components/pokemon';
import { Grid } from '@nextui-org/react';

interface HomePageProps { 
  pokemons : SmallPokemon[];
}



const HomePage:NextPage<HomePageProps> = ({ pokemons }) => {

  return (
    <Layout title='APP POQUEMON'> 
    <Grid.Container gap={2} justify='flex-start'>
      {
        pokemons.map(pokemon => <PokemonCard key={pokemon.id}  pokemon={pokemon} />)
      }
    </Grid.Container>
    </Layout>
    
      
  )
}



// se ejecuta solo una ves en build time de la app
export const getStaticProps : GetStaticProps = async () => { 

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons:SmallPokemon[] = data.results.map((poke, i)=>({
    ...poke,
    id: i + 1 ,
    image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    })
  ) 

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
