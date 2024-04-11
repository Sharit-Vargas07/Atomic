import React from 'react'
import Modal from '../organismos/Modal.jsx';
import FormLoginUser from '../moleculas/FormLogin.jsx';

function UsuarioModal ({ open, onClose, handleSubmit, actionLabel, title, initialData, mode,  setModalOpen}){

    return (
      <>

      <Modal open={open} onClose={onClose}> 
        <FormLoginUser handleSubmit={handleSubmit} actionLabel={actionLabel} initialData={initialData} mode={mode} setModalOpen={setModalOpen} />
      </Modal>
      
      </>
    )
} 

export default UsuarioModal