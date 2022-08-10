import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../components/index' 
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

const navigate = useNavigate(); // para la navegacion
const location = useLocation(); // para obtener la localizacion donde nos encontramos 

const { q = ''} = queryString.parse(location.search);
const heroes = getHeroesByName(q);

const showSearch = (q.length === 0); // esta condicion ya regresa un booleano, true y false. Muestra u oculta el cuadro verde de busqueda 

const showError = (q.length > 0) && heroes.length === 0;  // esta constante evalua la infomacion entrante para mostrar el cuadro rojo de error 


// aqui llamamos las funciones que estan escritas en el custom hook de useForm para leer la informacion de los inputs y limpiar el input  
const { searchText, onInputChange } = useForm({
  searchText: q
});

const onSearchSubmit = (event) => {
    event.preventDefault();

    // este condicional indica que si no hay letras o hay 1, no haga el submit y no haga nada 
    if ( searchText.trim().length <= 1 ) return; 

    navigate(`?q=${ searchText}`);
    //console.log({searchText});
}

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

<div className='row'>
      <div className='col-5'>
        <h4> Searching </h4>
        <hr/>
        <form onSubmit={ onSearchSubmit }>
          <input 
            type='text'
            placeholder='Search a hero'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={ searchText }
            onChange= { onInputChange }

          />
          <button className='btn btn-outline-success mt-1'>
            Search
          </button>
        </form>
      </div>

      <div className='col-7'>
        <h4> Results </h4>
        <hr/>
{/*Una forma de hacer el condicional es 
{
  ( q === '')
  ?  <div className='alert alert-success'> Search a hero </div>
  : (heroes.length === 0 )
  && <div className='alert alert-danger'>The hero <b>'{ q }'</b>was not found</div>
}

*/}

        <div className='alert alert-success animate__animated animate__fadeIn' 
            style={{ display: showSearch ? '' : 'none'}}>
          Search a hero
        </div>
        
        <div className='alert alert-danger animate__animated animate__fadeIn' 
          style={{ display: showError ? '': 'none'}}>
         The hero <b> ' { q } ' </b> was not found
        </div>

        {
          heroes.map( hero => (
            
            <HeroeCard key={ hero.id} {...hero} /> 

          ))
        }
      </div>
    </div> 
</>
  )
}
