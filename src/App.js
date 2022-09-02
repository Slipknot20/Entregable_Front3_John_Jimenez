import Cabecera from './components/Cabecera'
import Listado from './components/Listado';
import { useState } from 'react';

function App(props) {

   const [contador, setContador] = useState(0);
  const incrementar = () =>{
    setContador( contador+1);
}

  return (
    <div className="App">
      <Cabecera contador={contador}/>
      <Listado numero={incrementar}/>
    </div>
  );
}

export default App;