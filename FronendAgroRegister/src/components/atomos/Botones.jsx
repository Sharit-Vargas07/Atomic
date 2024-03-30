// ButtonAtom.js
import React from 'react';

const Boton = ({ onClick, label, className }) => {
 return (
    <button onClick={onClick} className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
      {label}
    </button>
 );
};

export default Boton;
