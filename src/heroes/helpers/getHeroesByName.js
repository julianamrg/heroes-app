import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '') => {

  // colocamos toda la informacion en minuscula
  name = name.toLocaleLowerCase().trim();
 
  // si no hay informacion en el input, retorna un string vacio 
  if ( name.length === 0) return [];

  return heroes.filter( 
    hero => hero.superhero.toLocaleLowerCase().includes( name )
  );
}
// funcion para buscar el heroe a traves del input