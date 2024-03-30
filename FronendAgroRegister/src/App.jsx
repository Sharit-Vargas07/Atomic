import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/organismos/Header/Header';
import Formulario from './components/organismos/Formulario';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Formulario/>
    </>
  )
}

export default App
