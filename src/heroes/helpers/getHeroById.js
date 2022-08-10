import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {
  
  // si no existe el heroe regresa indefinido 
  return heroes.find ( hero => hero.id === id);  
    
}
