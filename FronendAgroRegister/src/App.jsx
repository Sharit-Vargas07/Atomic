import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { IniciarSesion } from './pages/InicioSesion.jsx';
import { Registro } from './pages/Registro.jsx';
import Soporte from '../src/pages/Soporte.jsx'
import Dashboardkev from './pages/Dashboarkev.jsx';
import InicioF from './pages/Inicio.jsx';
import Cultivos from './pages/CultivosOfi.jsx';
import Finca from './pages/fincas.jsx';
import { Olvidopassone } from './pages/OlvidoContrase2.jsx';
import { Olvidopasstwo } from './pages/OlvidoContrase3.jsx';
import { Olvidopasstree } from './pages/OlvidoContrase.jsx';
import Usuario from './pages/Usuarios.jsx';
import Reportes from './pages/Reportes.jsx';


function App() {

  return (
    <BrowserRouter>    
    {/*   <Sidebar /> */}
        <Routes>
          <Route path="/" element={<InicioF />} />
          <Route path="/iniciosesion" element={<IniciarSesion />} />
          <Route path="/registrarse" element={<Registro />} />
          <Route path="/olvidocontra1" element={<Olvidopassone/>} />
          <Route path="/olvidocontra2" element={<Olvidopasstwo/>} />
          <Route path="/olvidocontra3" element={<Olvidopasstree/>} />
          <Route path="/finca" element={<Finca/>} />
          <Route path="/usuarios" element={<Usuario/>} />
          <Route path="/cultivo" element={<Cultivos/>} />
          <Route path="/Soport" element={<Soporte />} />
          <Route path="/dashboard" element={<Dashboardkev />} />
          <Route path="/reportes" element={<Reportes />} />
          
        </Routes>

    </BrowserRouter>
  )
}

export default App;
