import {HeroesApp} from './HeroesApp';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <> 
      <BrowserRouter >     
        <HeroesApp />
      </BrowserRouter>

    </>
  );
}

export default App;