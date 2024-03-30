import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/organismos/Header/Header';
import { Programacion } from './components/organismos/Tablas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Programacion/>
    </>
  )
}

export default App
