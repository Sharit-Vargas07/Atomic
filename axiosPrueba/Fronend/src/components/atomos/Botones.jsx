// ButtonAtom.js
import React from 'react';
import { Button } from 'react-bootstrap';


const Botones = ({ onClick, actionLabel, variant }) => {
 return (
    <Button type='submit' variant={variant} onClick={onClick} style={{width: '90px', height: '40px',background:'#008000'}}>
    {actionLabel}
    </Button>
 );
};

export default Botones;
