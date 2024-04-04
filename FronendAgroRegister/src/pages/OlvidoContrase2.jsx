import React from 'react';
import Formulario from '../components/organismos/Formulario.jsx';
import Botones from '../components/atomos/Botones.jsx';
import { Modal } from 'react-bootstrap';
import Logo from '../../src/assets/LogoOrigi.png';

export const Olvidopassone = () => {
    const campos = [
        { name: 'correo', type: 'text', placeholder: 'Correo Electronico' },
    ];
    
    const formularioStyle = {
        border: '1px solid #ccc', // Agregando borde
        borderRadius: '5px', // Ajustando las esquinas del borde
        padding: '20px', // Ajustando el relleno interno
        margin: '20px auto', // Centrando el formulario horizontalmente
        maxWidth: '400px' // Estableciendo el ancho máximo del formulario
    };

    return (
        <div className='flex'>
            <div className='flex items-center justify-center'>
                <form style={formularioStyle}>
                    <label className="text-xl font-bold flex justify-center items-center p-10">Recuperación de Contraseña</label>
                    <div style={{marginTop :'150px'}}>
                        <Formulario campos={campos} />
                    </div>
                    <div className='flex flex-col m-5 justify-center items-center'>
                        <Botones children='Enviar' />
                    </div>
                    <img src={Logo} alt="" className="flex img-fluid mx-auto " style={{ maxWidth: '200px', maxHeight: '200px' }} />
                <div className='w-2/6 ml-10 p-20'>
                    <label className="text-xl font-bold justify-center items-center p-10">En caso de que se le olvide la contraseña puede recuperala desde el correo que haya registrado anteriormente en el registro de su cuenta</label>
                </div>
                </form>
                
            </div>
        </div>
    );
};
