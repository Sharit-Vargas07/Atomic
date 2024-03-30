// InputAtom.js
import React from 'react';

const InputAtom = ({ type, value, onChange, placeholder }) => {
 return (
  <input
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  className=" rounded px-2  mb-4 "
  style={{ borderColor: '#008000' }}
 />
 
 );
};

export default InputAtom;
