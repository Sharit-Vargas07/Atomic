import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Botones from '../atomos/Botones';
import v from '../../styles/variables.jsx'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const Registro = (

    
) => {

    const token = localStorage.getItem('token')


    const nombre = useRef(null)
    const apellido = useRef(null)
    const correo = useRef(null)
    const password = useRef(null)
    const rol = useRef(null)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const data = {

                nombre: nombre.current.value,
                apellido: apellido.current.value,
                correo: correo.current.value,
                password: password.current.value,
                rol: rol.current.value,

            }
                const baseURL = 'http://localhost:3000/usuarios/registrarUsuario'

                axios.post(baseURL, data).then((response) => {
                    console.log(response)

                    if (response.status == 200) {
                        alert('registro exitoso')
                        navigate('/iniciosesion')
                    } else {
                        alert('Error de registro')
                    }

                })
        } catch (error) {
            alert('Error de servidor' + error)
        }
    }



    return (
        <div className='container w-70 border border-#035020 mt-3 rounded shadow wt-80' style={{marginTop:'500px'}}>
            <div className='d-flex justify-content-center items-content-center'>
                <div className='col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 ' style={{ marginLeft: '-12px', }}>
                    <img src={v.image11} className='img-fluid rounded-start'/>
                </div>
                <div  className='d-flex justify-content-center col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6' style={{ marginTop:'30px'}}>
                <form method='post' onSubmit={handleSubmit}>
                    <div className='container d-flex row justify-content-center'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input
                                    className='form-control mb-3'
                                    name='nombre'
                                    type="text"
                                    placeholder='Ingrese el nombre'
                                    ref={nombre}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input
                                    className='form-control mb-3'
                                    name='apellido'
                                    type="text"
                                    placeholder='Ingrese el apellido'
                                    ref={apellido}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input
                                    className='form-control mb-3'
                                    name='correo'
                                    type="text"
                                    placeholder='Ingrese el correo'
                                    ref={correo}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input
                                    className='form-control mb-3'
                                    name='password'
                                    type="password"
                                    placeholder='Ingrese el password'
                                    ref={password}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input
                                    className='form-control mb-3'
                                    name='rol'
                                    type="text"
                                    placeholder='Ingrese el rol'
                                    ref={rol}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-grid col-6 mx-5 my-5">
                    <Link to="#">
                        <Botones actionLabel="Registrar" onClick={handleSubmit} />
                    </Link>
                </div>
                </form>
                </div>
            </div>
        </div>


    );
};


export default Registro   