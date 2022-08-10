import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroeCard } from '../components/HeroeCard';

export const HeroeList = ( { publisher }) => {
  
  const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher]  ) ; 
  //este useMemo memoriza la informacion anterior y solo cambia si cambian las dependiencias (en este caso publisher)

  return (
    
  
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        { heroes.map( heroe => (
            <HeroeCard 
                key={ heroe.id}
                {...heroe}    
            />
        ))}
    </div>
  )
}
/* { heroes.map( heroe => ( using a map 
          <li key = {heroe.id}>
            {heroe.superhero}
          </li>
        ))} */