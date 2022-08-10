import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams(); // hook de react-router-dom para usar los parametros
  const navigate = useNavigate(); // para usar useNavigate

  const hero = useMemo( () => getHeroById( id ), [ id ] ); // para memorizar que la funcion getHeroeById solo se renderiza nuevamente si el id cambia (está dentro de la dependencia )

  const onNavitageBack = () => { // funcion del boton regresar
      navigate(-1); // con este -1 me regresa a la pagina anterior 
  }

  // este condicional se usa por si el usuario escribe una url que no existe, este lo redirecciona a la pagina principal de la lista de heroes 
  if ( !hero ){
    return <Navigate to='/marvel' />

  }
 // console.log(hero);



  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={`/assets/heroes/${id}.jpg`} alt= { hero.superhero } className='img-thumbnail animate__animated animate__fadeInLeft' 
        />
      </div>

      <div className='col-8'>
        <h3> { hero.superhero } </h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b> Alter ego: </b> {hero.alter_ego} </li>
          <li className='list-group-item'> <b> Publisher: </b> {hero.publisher} </li>
          <li className='list-group-item'> <b> First appearance: </b> {hero.first_appearance} </li>
        </ul>

        <h5 className='mt-3'> Characters </h5>
        <p> { hero.characters } </p>

        <button 
          className='btn btn-outline-success' 
          onClick={ onNavitageBack }  
        >
          Back
        </button>
      </div>
      
    </div>
  )
}
