// InputAtom.js
import React from 'react';

const InputAtom = ({ type, value, onChange, placeholder }) => {
 return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-green-500 rounded px-3 py-1 mb-4 w-full"
    />
 );
};

export default InputAtom;
