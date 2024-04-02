import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import BotonesModal from '../atomos/BotonesModal';

function ModalRecuRegeContrasenia({ titulo, mostrar, cerrarModal, onSiguienteClick, children }) {
  const [siguienteVisible, setSiguienteVisible] = useState(true);

  const handleSiguienteClick = () => {
    onSiguienteClick();
    setSiguienteVisible(false);
  };

  const siguienteTexto = siguienteVisible ? "Siguiente" : "Generar";

  return (
    <Modal show={mostrar} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <BotonesModal className='text-white bg-grey' variant="secondary" onClick={cerrarModal}>Cerrar</BotonesModal>
        <BotonesModal className='text-white bg-success' variant="primary" onClick={handleSiguienteClick}>{siguienteTexto}</BotonesModal>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRecuRegeContrasenia;
