
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Toggle from '../atomos/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import v from '../../styles/variables';
import Image from '../atomos/Logo';
import ImagenesConfi from './ImagenesConfi';
import TituloSoporte from '../moleculas/TituloSoporte';
import Icon from '../atomos/Iconos';
import SelectIdioma from '../moleculas/SelectIdioma';
import SpanSoporte from '../atomos/Span';
import BotonesModal from '../atomos/BotonesModal';
import DivRecuperarCont from '../moleculas/divRecuperarCont';
import DivLorem from '../atomos/divlorem';



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



  
  
  return (
    <div className='container'>

      <ImagenesConfi />
      <TituloSoporte />
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <div className="text-center my-4">
            <h2 className="mt-5 text-4xl font-weight-bold mt-4 mb-3">
              <Icon icon={v.iconoUsuario} className="mr-2" />
              Juan Pérez
            </h2>
          </div>

          <div className="g-4 d-flex justify-content-center">
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


          <div className=" d-flex justify-content-center mt-5">
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
          <Modal show={primerModalAbierto} onHide={cerrarPrimerModal}>
            <Modal.Header closeButton>
              <Modal.Title>Recuperación de Contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Ingrese el código de verificación:</p>
              <input type="text" className="form-control mb-4" />
            </Modal.Body>
            <Modal.Footer>
              <BotonesModal className='text-white bg-grey' variant="secondary" onClick={cerrarPrimerModal}>Cerrar</BotonesModal>
              <BotonesModal className='text-white bg-success' variant="primary" onClick={abrirSegundoModal}>Siguiente</BotonesModal>
            </Modal.Footer>
          </Modal>

          {/* Segundo Modal */}
          <Modal show={segundoModalAbierto} onHide={cerrarSegundoModal}>
            <Modal.Header closeButton>
              <Modal.Title>Regenerar Contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Escribe la nueva contraseña:</p>
              <input type="password" className="form-control mb-4" />
              <p>Confirma tu contraseña:</p>
              <input type="password" className="form-control mb-4" />
            </Modal.Body>
            <Modal.Footer>
              <BotonesModal className='text-white bg-grey' variant="secondary" onClick={cerrarSegundoModal}>Cerrar</BotonesModal>
              <BotonesModal className='text-white bg-success' variant="primary">Generar</BotonesModal>
            </Modal.Footer>
          </Modal>
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
  )
}


export default Soporte;