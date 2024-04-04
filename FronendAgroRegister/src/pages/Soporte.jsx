import React, { useState } from 'react';
import Toggle from '../components/atomos/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import v from '../styles/variables';
import ImagenesConfi from '../components/organismos/ImagenesConfi';
import TituloSoporte from '../components/moleculas/TituloSoporte';
import Icon from '../components/atomos/Iconos';
import SelectIdioma from '../components/moleculas/SelectIdioma';
import SpanSoporte from '../components/atomos/Span';
import DivRecuperarCont from '../components/moleculas/divRecuperarCont';
import ModalRecuRegeContrasenia from '../components/organismos/Modal';
import DivLorem from '../components/atomos/divlorem';
import Image from '../components/atomos/Logo';
import Header from '../components/organismos/Header/Header';

function Soporte() {
  const [notificacionesActivadas, setNotificacionesActivadas] = useState(false);
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState('es');
  const [primerModalAbierto, setPrimerModalAbierto] = useState(false);
  const [segundoModalAbierto, setSegundoModalAbierto] = useState(false);

  const toggleNotificaciones = () => {
    setNotificacionesActivadas(!notificacionesActivadas);
  };

  const handleIdiomaChange = (event) => {
    setIdiomaSeleccionado(event.target.value);
  };

  const abrirPrimerModal = () => {
    setPrimerModalAbierto(true);
  };

  const cerrarPrimerModal = () => {
    setPrimerModalAbierto(false);
  };

  const abrirSegundoModal = () => {
    setSegundoModalAbierto(true);
  };

  const cerrarSegundoModal = () => {
    setSegundoModalAbierto(false);
  };

  const handleSiguienteClick = () => {
    abrirSegundoModal(); // Abrir el segundo modal al hacer clic en "Siguiente"
  };

  return (
    <div className='container'>
      {/* Resto del contenido */}
      <Header/>
      <ImagenesConfi />
      <TituloSoporte />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center my-4">
            <h2 className="mt-5 text-4xl font-weight-bold mt-4 mb-3">
              <Icon icon={v.iconoUsuario} className="mr-2" />
              Juan Pérez
            </h2>
          </div>

          <div className="d-flex justify-content-center">
            <SpanSoporte>Idioma:</SpanSoporte>
            <SelectIdioma />
            <SpanSoporte>Notificaciones:</SpanSoporte>
            <Toggle
              onChange={toggleNotificaciones}
              checked={notificacionesActivadas}
              onColor="#008000"
              offColor="#BEC3C7"
            />
          </div>

          <div className="d-flex justify-content-center mt-5">
            <DivRecuperarCont
              onClick={abrirPrimerModal}
              title="Recuperar Contraseña"
              icon={v.iconoCandado}
              paragraph="¿No recuerdas tu contraseña?"
              linkText="Haz Click Aquí"
            />
            <DivRecuperarCont
              title="Documentación"
              icon={v.iconoDocumento}
              paragraph="Descarga nuestra Documentación aquí:"
              linkText="Haz Click Aquí"
            />
          </div>

          {/* Primer Modal */}
          <ModalRecuRegeContrasenia
            titulo="Recuperación de Contraseña"
            mostrar={primerModalAbierto}
            cerrarModal={cerrarPrimerModal}
            siguienteVisible={true} // Mostrar el botón "Siguiente"
            onSiguienteClick={handleSiguienteClick}
          >
            <p>Ingrese el código de verificación:</p>
            <input type="text" className="form-control mb-4" />
          </ModalRecuRegeContrasenia>

          {/* Segundo Modal */}
          <ModalRecuRegeContrasenia
            titulo="Regenerar Contraseña"
            mostrar={segundoModalAbierto}
            cerrarModal={cerrarSegundoModal}
            siguienteVisible={false} // Ocultar el botón "Siguiente"
          >
            <p>Escribe la nueva contraseña:</p>
            <input type="password" className="form-control mb-4" />
            <p>Confirma tu contraseña:</p>
            <input type="password" className="form-control mb-4" />
            {/* <BotonesModal className='text-white bg-success' variant="primary">Generar</BotonesModal> */}
          </ModalRecuRegeContrasenia>

          {/* Resto del contenido */}
        </div>
      </div>
      <div className='bg-custom p-5 mt-5'>
        <Image style={{ width: "70px", height: "50px" }} />
        <SpanSoporte>Lorem ipsum</SpanSoporte>
        <div className='d-flex justify-content-start'>
          <DivLorem />
          <DivLorem />
          <DivLorem />
          <DivLorem />
        </div>
      </div>
      <hr />
      <div className='d-flex justify-content-center align-items-center mb-3'>
        <p className="m-0">CopyRight</p>
        <FontAwesomeIcon icon={v.iconoCopyRight} className="mx-2" />
        <p className="m-0">2024 ADSO 2692929 todos los Derechos Reservados</p>
      </div>
    </div>
  );
}

export default Soporte;