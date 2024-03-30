// ButtonAtom.js
import React from 'react';
import { Button } from 'react-bootstrap';


const Botones = ({ onClick, children, className,variant }) => {
 return (
    <Button  className={className} variant={variant} onClick={onClick} style={{width: '90px', height: '40px',background:'#008000'}}>
    {children}
    </Button>
 );
};

export default Botones;
