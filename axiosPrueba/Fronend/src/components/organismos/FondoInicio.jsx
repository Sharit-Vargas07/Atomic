import React from 'react';
import { Button } from 'react-bootstrap';
import v from '../../styles/variables';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Link } from 'react-router-dom';
import Titulo1 from '../atomos/Titulo1';
import ImageFondo from '../atomos/ImageFondo';
import Image from '../atomos/Logo';
import SpanSoporte from '../atomos/Span';


const FondoInicio = () => {
    return (
        <div className="fondo-inicio ">

            <div className='row'>

                <div className='bg-white d-lg-block col-md-5 col-lg-5 col-xl-6 rounded shadow' style={{ height: '80vh', width: '85vh', margin: '28px' }}>
                    <div className="text-center mt-5">
                        <Image style={{ width: '300px', height: '250px'}} />
                    </div>
                    <p className='text-center my-3'>Se creó para ayudar a los agricultores a gestionar y controlar sus actividades durante el crecimiento y producción de sus cultivos, protegiéndolos para que alcancen una excelente producción y beneficien económicamente a los agricultores.</p>
                </div>

                <div className='col'>

                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" size="lg" className="mb-2" style={{ backgroundColor: '#035020', border: 'none', marginTop: '50px' }}>
                            <Link to='/iniciosesion' className='text-white text-decoration-none'>Iniciar Sesion</Link>
                        </Button>
                        <Button variant="primary" size="lg" className="mb-2" style={{ backgroundColor: '#035020', border: '1px solid #56880D', marginTop: '50px', marginLeft: '20px' }}>
                            <Link to='/registro' className='text-white text-decoration-none'>Registrarse</Link>
                        </Button>

                    </div>
                    <div className='d-flex justify-content-center'>
                        <Titulo1 style={{ Color: '#000000' }} children='CROP LINK' />
                    </div>

                </div>

            </div>

            <style jsx>{`
                .fondo-inicio {
                    background-image: url(${v.image9}); 
                    background-size: cover; 
                    background-position: center;
                    min-height: 100vh;
                    padding: 10px; 
                    overflow-y: hidden; 
                    background-attachment: fixed; 

                .btn:focus {
                    outline: none;
                    box-shadow: none;
                } `}
            </style>
        </div>
    );
};

export default FondoInicio;
