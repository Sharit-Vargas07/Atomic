import React, { useState } from "react";
import DataTable from "react-data-table-component";


export function Programacion() {
  const columns = [
    {
      name: 'Actividad',
      selector: (row) => row.Actividad,
      sortable: true,
    },
    {
      name: 'Cultivo',
      selector: (row) => row.Cultivo,
      sortable: true,
    },
    {
      name: 'Finca',
      selector: (row) => row.Finca,
      sortable: true,
    },
    {
      name: 'Fecha',
      selector: (row) => row.Fecha,
      sortable: true,
    },
    {
      name: 'Hora',
      selector: (row) => row.Hora,
      sortable: true,
    },
    {
      name: 'Acciones',
      selector: (row) => row.acciones,
    },
  ];

  const data = [
    {
      Actividad: 'Abonar',
      Cultivo: 'Cafe',
      Finca: 5,
      Fecha: "06/03/2024",
      Hora: "10:30",
      acciones: (
        <div>
          <button className="btn btn-warning" type="button" onClick={() => handleOpenModal("Editar programacion")}>
            Editar
          </button>
        </div>
      ),
    },
    // Resto de los datos...
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(""); 

  const [formData, setFormData] = useState({
    nombre_variedad: "",
    nombre_actividad: "",
    tipo_recurso: "",
    tiempo: "",
  });

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
    <div>
      <div className="container" style={{marginTop: '220px'}}>
        <button
          className="btn btn-success mb-3"
          type="button"
          onClick={() => handleOpenModal("Registrar programacion")}
        >
          Registrar
        </button>
        <DataTable
          columns={columns}
          data={data}
          title=""
          fixedHeader
          pagination
          paginationComponentOptions={{
            rowsPerPageText: "Filas por página",
            rangeSeparatorText: "de",
            selectAllRowsItem: true,
            selectAllRowsText: "Todos",
          }}
        />
      </div>

      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre_variedad" className="form-label">
                      Nombre usuario
                    </label>
                    <input
                      type="text"
                      id="nombre_variedad"
                      name="nombre_variedad"
                      value={formData.nombre_variedad}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  {/* Resto del formulario... */}
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

