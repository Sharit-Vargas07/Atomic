import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/organismos/Header/Header';
import Formulario from './components/organismos/Formulario';
import { Programacion } from './components/organismos/Tablas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Formulario/>
        <Programacion/>
    </>
  )
}

export default App
