import {FC} from 'react';
import { useRouter } from 'next/router'

import { Card, Grid } from '@nextui-org/react';

interface PokemonFavoriteProps {
  pokemonIds: number[];
}

export const PokemonFavorite:FC<PokemonFavoriteProps> = ({pokemonIds}) => {

  const router = useRouter();

  const onPokemonPage = (id:number) => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
            pokemonIds.map((pokemonId:number) =>{
              return (
                <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
                  <Card hoverable clickable css={{padding: 10}} onClick={() => onPokemonPage(pokemonId)}>
                    <Card.Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                      width={'100%'}
                      height={140}
                    />
                  </Card>
                </Grid>

              )
            })
            
            }
        
    </Grid.Container>
  )
}

