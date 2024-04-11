import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import InicioF from "./components/pages/Inicio.jsx";
import { IniciarSesion } from "./components/pages/InicioSesion.jsx";
import Registro from "./components/pages/Registro.jsx";
import { Usuario } from "./components/pages/Usuario.jsx";
function App() {

  return (
    <BrowserRouter>    
    {/*   <Sidebar /> */}
        <Routes>
       
                    <Route path="/" element={<InicioF />} />
                    <Route path="/iniciosesion" element={<IniciarSesion />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/usuarios" element={<Usuario />} />



        </Routes>

    </BrowserRouter>
  )
}

export default App;
