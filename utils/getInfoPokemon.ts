import {pokeApi} from '../api';
import {Pokemon} from '../interfaces';

//utilizo esta funcion para q me traiga losdatos en el servidos y en el momento del builder
export const  getInfoPokemons = async(nameOrId:string) => {

  const { data } = await pokeApi.get<Pokemon>('/pokemon/' + nameOrId);
  
  // con esto solo me traigo del pokemos los parametros q nesecito para la pagina
    
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites 
  }

}