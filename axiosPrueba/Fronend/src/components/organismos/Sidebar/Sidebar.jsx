import React from 'react'
import NavItem from '../../moleculas/Sidebar/NavItem'
import './Sidebar.css';
import v from '../../../styles/variables';

function Sidebar() {
  return (
    <div className='justify-content-start'>
                  <div className="offcanvas offcanvas-start bgMenu" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ">
                <NavItem icon={v.iconoPerfilUsuario} text="Perfil" href="#" />
                <NavItem icon={v.iconoFinca} text="Finca" href="/finca" />
                <NavItem icon={v.iconoCultivo} text="Cultivos" href="/cultivos" />
                <NavItem icon={v.iconoActividad} text="Actividad" href="#" />
                <NavItem icon={v.iconoTractor} text="Recursos" href="#" />
                <NavItem icon={v.iconoReporte} text="Reportes" href="#" />
                <NavItem icon={v.iconoSoporte} text="Soporte" href="/soport" />
                <NavItem icon={v.iconoNosotros} text="Nosotros" href="#" />
                <NavItem icon={v.iconoSalir} text="Salir" href="/" />
              </ul>

            </div>
          </div>
    </div>
  )
}

export default Sidebar