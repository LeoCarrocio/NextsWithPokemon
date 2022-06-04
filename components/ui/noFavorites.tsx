import {FC} from 'react';

import {Container, Image, Text} from '@nextui-org/react';


export const NoFavorites:FC = () => {

    return (
        <Container css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: 'calc(100vh - 100px)',
          alignSelf:'center'
        }}>
          <Text h1>NO FAVORITOS</Text>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" 
            alt="No favorites" 
            width={200} 
            height={200} 
            css={{opacity: 0.1}}
            />
        </Container>

    );

  }