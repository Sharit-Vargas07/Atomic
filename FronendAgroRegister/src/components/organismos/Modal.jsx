import React from 'react'
import { Modal } from 'react-bootstrap';
import ModalBody from '../moleculas/Modal/ModalBody';
import BotonesModal from '../atomos/BotonesModal';

function ModalRecuperacionContraseña({
    primerModalAbierto,
    cerrarPrimerModal,
    abrirSegundoModal
  }) {
    return (
      <Modal show={primerModalAbierto} onHide={cerrarPrimerModal}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperación de Contraseña</Modal.Title>
        </Modal.Header>
        <ModalBody type="text">Ingrese el código de verificación:</ModalBody>
        <Modal.Footer>
          <BotonesModal
            className='text-white bg-grey'
            variant="secondary"
            onClick={cerrarPrimerModal}
          >
            Cerrar
          </BotonesModal>
          <BotonesModal
            className='text-white bg-success'
            variant="primary"
            onClick={abrirSegundoModal}
          >
            Siguiente
          </BotonesModal>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ModalRecuperacionContraseña;
  