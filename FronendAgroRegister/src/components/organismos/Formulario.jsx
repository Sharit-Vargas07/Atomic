import React, { useState } from 'react';
import Input from '../atomos/Inputs.jsx';
import BotonesModal from '../atomos/BotonesModal.jsx';

const Formulario = ({ campo, onSubmit }) => {
  const [values, setValues] = useState({});
  
  const campos = [
    { name: 'nombre', type: 'text', placeholder: 'Nombre' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'telefono', type: 'tel', placeholder: 'Teléfono' }
  ];
    

  const handleChange = (e, campo) => {
    const { name, value } = e.target;
    setValues({ ...values, [campo]: { value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form style={{marginTop: '150px'}} onSubmit={handleSubmit}>
      {campos.map((campo, index) => (
        <div key={index}>
          <Input
            type={campo.type}
            name={campo.name}
            value={values[campo.name]?.value || ''}
            onChange={(e) => handleChange(e, campo.name)}
            placeholder={campo.placeholder}
            options={campo.options} // Pasar opciones para campos de selección
          />
        </div>
      ))}
      <BotonesModal className='text-white bg-success' variant="primary" onClick={handleSubmit}>Login</BotonesModal>
    </form>
  );
};

export default Formulario;