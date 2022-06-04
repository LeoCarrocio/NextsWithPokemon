const togglesFavorite = ( id : number ) => {

  let favorites = JSON.parse( localStorage.getItem( 'favorites' ) || '[]' );

  if(favorites.includes( id )) {
    favorites = favorites.filter( (item:any) => item !== id );
  }else {
    favorites.push( id );
  }

  localStorage.setItem( 'favorites', JSON.stringify( favorites ) );

}

const isFavorites = ( id : number ) => {
  // como hay codigo q se genera en el back y en este ambiente no esta el obj window y menos el local storaage, 
  // utilizo este if para q no rompa, el codigo a se vuelve a ejecutar en el lado del cliente
  if (typeof window === 'undefined' ) return false;
  
  let favorites = JSON.parse( localStorage.getItem( 'favorites' ) || '[]' );
  return favorites.includes( id );
}

const getFavorites = ():number[] => {
  let favorites = JSON.parse( localStorage.getItem( 'favorites' ) || '[]' );
  return favorites;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  togglesFavorite,
  isFavorites,
  getFavorites
}