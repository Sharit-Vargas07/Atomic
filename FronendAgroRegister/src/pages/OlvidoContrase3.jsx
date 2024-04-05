import React from 'react';
import Formulario from '../components/organismos/Formulario.jsx';
import Botones from '../components/atomos/Botones.jsx';
import { Modal } from 'react-bootstrap';
import Logo from '../../src/assets/LogoOrigi.png';
import { Link } from 'react-router-dom';

export const Olvidopasstwo = () => {
    const campos = [
        { name: 'codigo', type: 'number', placeholder: 'Codigo ' },
    ];
    
    const formularioStyle = {
        border: '1px solid #ccc', 
        borderRadius: '5px',
        padding: '20px', 
        margin: '20px auto', 
        maxWidth: '400px'
    };

    return (
        <div className='flex'>
            <div className='flex items-center justify-center'>
                <form style={formularioStyle}>
                    <label className="text-xl font-bold flex justify-center items-center p-10">Codigo de Recuperación</label>
                    <div style={{marginTop :'150px'}}>
                        <Formulario campos={campos} />
                    </div>
                    <div className='flex flex-col m-5 justify-center items-center'>
                        <Link to='/'>
                        <Botones children='Enviar' />
                        </Link>
                    </div>
                    <img src={Logo} alt="" className="flex img-fluid mx-auto " style={{ maxWidth: '200px', maxHeight: '200px' }} />
                <div className='w-2/6 ml-10 p-20'>
                    <label className="text-xl font-bold justify-center items-center p-10">Por favor ingrese el codigo
 enviado a su correo</label>
                </div>
                </form>
                
            </div>
        </div>
    );
};
