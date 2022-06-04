import { FC } from 'react'
import { useRouter } from 'next/router'
import { SmallPokemon } from '../../interfaces'
import { Text, Grid, Card,Row} from '@nextui-org/react';



interface PokemonCardProps {
  pokemon: SmallPokemon ; 
}


export const PokemonCard:FC<PokemonCardProps> = ({pokemon}) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} key={pokemon.id}>
              <Card hoverable clickable onClick={onClick} >
                <Card.Body css={{ p: 0 }}> 
                  <Card.Image
                    objectFit="cover"
                    src={pokemon.image}
                    width="75%"
                    height={140}
                    alt={pokemon.name}
                  />
                </Card.Body>
                <Card.Footer >
                  <Row wrap="wrap" justify="space-between">
                    <Text b>{pokemon.name}</Text>
                    <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                      {pokemon.id}
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
  )
}
