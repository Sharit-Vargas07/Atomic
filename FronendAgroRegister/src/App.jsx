import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/organismos/Header/Header';
import Soporte from './pages/Soporte';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Soporte/>
    </>
  )
}

export default App
