import React, { useState } from "react";
import Botones from "../components/atomos/Botones";
import ModalRecuRegeContrasenia from "../components/organismos/Modal";
import { TablaFinca } from "../components/organismos/TablaFinca";
import Header from "../components/organismos/Header/Header";

function Usuario() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(""); 

  const [formData, setFormData] = useState({
    nombre_variedad: "",
    nombre_actividad: "",
    tipo_recurso: "",
    tiempo: "",
  });

  const columns = [ 
    {
      name: 'Nombre Usuario',
      selector: (row) => row.NombreUsuario,
      sortable: true,
    },
    {
      name: 'Direccion',
      selector: (row) => row.Direccion,
      sortable: true,
    },
    {
      name: 'Longitud',
      selector: (row) => row.Longitud,
      sortable: true,
    },
    {
      name: 'Latitud',
      selector: (row) => row.Latitud,
      sortable: true,
    },
    {
      name: 'Acciones',
      selector: (row) => row.acciones,
    },
  ];

  const data = [
    {
      NombreUsuario: 'Yamboro',
      Direccion: 'Pitalito Huila',
      Longitud: 1346,
      Latitud: 394435,
      acciones: (
        <div>
          <button className="btn btn-warning p-2 rounded-lg text-sm font-bold" type="button" onClick={() => handleOpenModal("Editar Usuario")}>
            Editar
          </button>
        </div>
      ),
    },
  ];

  function handleOpenModal(accion) {
    setShowModal(true);
    setModalTitle(accion);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      nombre_variedad: "",
      nombre_actividad: "",
      tipo_recurso: "",
      tiempo: "",
    });
    handleCloseModal();
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div style={{ marginTop: '8%' }}>
        <Header/>
      <div className="container mt-5">
        <Botones onClick={() => handleOpenModal("Registrar")} children="Registrar" />
        <TablaFinca columns={columns} data={data} handleOpenModal={handleOpenModal} />
      </div>

      <ModalRecuRegeContrasenia 
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        formData={formData}
        modalTitle={modalTitle}
      />
    </div>
  );
}

export default Usuario;
