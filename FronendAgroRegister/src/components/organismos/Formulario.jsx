import React, { useState } from 'react';
import Input from '../atomos/Inputs.jsx';
import Botones from '../atomos/Botones.jsx';

const Formulario = ({ campos, onSubmit, className }) => {
  const [values, setValues] = useState({});

  const handleChange = (e, campo) => {
    const { name, value } = e.target;
    setValues({ ...values, [campo]: { value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };
 
  return (
    <form className={className} onSubmit={handleSubmit}>
      {campos.map((campo, index) => (
        <div key={index}>
          <Input
            type={campo.type}
            name={campo.name}
            value={values[campo.name]?.value || ''}
            onChange={(e) => handleChange(e, campo.name)}
            placeholder={campo.placeholder}
            options={campo.options}
          />
        </div>
      ))}
      <Botones className='text-white bg-success' variant="primary" onClick={handleSubmit}>Login</Botones>
    </form>
  );
};

export default Formulario;