import React, { useState } from "react";
import Botones from "../components/atomos/Botones";
import { FaSearch } from "react-icons/fa";
import ModalRecuRegeContrasenia from "../components/organismos/Modal";
import TablaCultivos from "../components/organismos/TablaCultivos";
import Header from "../components/organismos/Header/Header";

function Cultivos() {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [formData, setFormData] = useState({
        fecha_inicio: "",
        cantidad_sembrada: "",
    });

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = (title) => {
        setShowModal(true);
        setModalTitle(title);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
        fecha_inicio: "",
        cantidad_sembrada: "",
        });
        handleCloseModal();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

    const handleUpdate = (row) => {
        setFormData({
        fecha_inicio: row.fecha_inicio,
        cantidad_sembrada: row.cantidad_sembrada,
        });
        handleOpenModal("Actualizar");
    };

    const handleDesactivar = (row) => {
        alert(`¿Seguro que deseas desactivar el cultivo con fecha de inicio ${row.fecha_inicio}?`);
    };

  const data = [
    {
      fecha_inicio: "12/03/2024",
      cantidad_sembrada: "5",
      estado: "Activo",
      acciones: "Acciones",
    },
    {
      fecha_inicio: "08/01/2024",
      cantidad_sembrada: "8",
      estado: "Activo",
      acciones: "Acciones",
    },
  ];

  return (
    <div className="container-fluid">
        <Header/>
      <div className="input-group m-4 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar"
          aria-label="Buscar"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            <FaSearch size={20} />
          </span>
        </div>
      </div>

      <Botones
        children="Registrar"
        className="btn btn-success mb-4 mt-4 custom-btn-color"
        onClick={() => handleOpenModal("Registrar")}
      />

      <TablaCultivos
        data={data}
        onEdit={handleUpdate}
        onDelete={handleDesactivar}
        showModal={showModal}
        onCloseModal={handleCloseModal}
        onFormSubmit={handleFormSubmit}
        onInputChange={handleInputChange}
        action={modalTitle}
        formData={formData}
      />

      <ModalRecuRegeContrasenia 
        showModal={showModal}
        onCloseModal={handleCloseModal}
        onFormSubmit={handleFormSubmit}
        onInputChange={handleInputChange}
        action={modalTitle}
        formData={formData}
      />
    </div>
  );
}

export default Cultivos;


