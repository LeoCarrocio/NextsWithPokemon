import {FC, useState} from 'react';

import {Pokemon} from '../../interfaces';

import { Grid, Card, Text, Button, Container, Image } from "@nextui-org/react"

import localFavorites  from '../../utils/localFavorites';


interface PokemonPageProps {
  pokemon: Pokemon
}

export const PokemonPageUi:FC<PokemonPageProps> = ({pokemon}) => {

const [isFavorite , setIsFavorite ] = useState<boolean>(localFavorites.isFavorites(pokemon.id));

const togglesFavorite = () => {
localFavorites.togglesFavorite(pokemon.id);
setIsFavorite(!isFavorite);
}

  return (
    <Grid.Container css={{marginTop: '5px'}} gap={2}>
      <Grid xs={12} sm={4}>
        <Card hoverable css={{padding:'30px'}}>
          <Card.Body>
            <Card.Image 
              src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} 
              alt={pokemon.name} 
              width="100%"
              height={200}
              />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{display: 'flex', justifyContent:'space-between'}}>
            <Text h1 transform="capitalize" >{pokemon.name}</Text>
            <Button
              color="gradient"
              ghost={!isFavorite}
              onClick={togglesFavorite}
            >
              {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </Button>  
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction='row' display='flex'>
              <Image 
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image 
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image 
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image 
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
                />

            </Container>
          </Card.Body>

        </Card>
      </Grid>

    </Grid.Container>

    
  )
}
