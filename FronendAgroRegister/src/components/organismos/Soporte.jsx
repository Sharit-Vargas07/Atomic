
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


          <div className="row justify-content-center mt-5">
            <div className="col-md-5 mb-3" onClick={abrirPrimerModal} style={{ cursor: 'pointer' }}>
              <div className="card p-4">
                <h2 className="text-2xl font-weight-bold mb-3">Recuperar contraseña</h2>
                <FontAwesomeIcon icon={v.iconoCandado} className="text-4xl mb-3" />
                <p className="text-lg text-gray-800">¿No recuerdas tu contraseña?</p>
                <p className="text-lg text-gray-800">
                  <a href="#" className="text-lg text-success" onClick={abrirPrimerModal}>Haz click aquí</a>
                </p>
              </div>
            </div>
            <div className="col-md-5 mb-3" onClick={abrirPrimerModal} style={{ cursor: 'pointer' }}>
              <div className="card p-4">
                <h2 className="text-2xl font-weight-bold mb-3">Documentación</h2>
                <FontAwesomeIcon icon={v.iconoDocumento} className="text-4xl mb-3" />
                <p className="text-lg text-gray-800">Descarga nuestra documentación aquí:</p>
                <p className="text-lg text-gray-800">
                  <a href="#" className="text-success" onClick={'#'}>Haz click aquí</a>
                </p>
              </div>
            </div>
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
      <div className='bg-gray-200 p-5 mt-5'>
        <Image />
        <h1 className='mt-6' style={{ fontSize: '22px' }}>Lorem Ipsum</h1>
        <div className='mr-120 flex flex-wrap'>
          <div className='w-1/3 p-2'>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className='w-1/3 p-2'>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className='w-1/3 p-2'>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className='w-1/3 p-2'>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className='w-1/3 p-2'>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className='w-1/3 p-2'>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Soporte;