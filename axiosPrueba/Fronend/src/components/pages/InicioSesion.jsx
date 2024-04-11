import React, { useRef } from 'react';
import Botones from '../atomos/Botones.jsx';
import v from '../../styles/variables';
import Image from '../atomos/Logo.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const IniciarSesion = () => {
        
        const baseURL = "http://localhost:3000/validacion"
    
    
    const nombre = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
    
    e.preventDefault()
    
    try {
      const data = {
        nombre: nombre.current.value,
        password: password.current.value
      }
      
      axios.post(baseURL, data).then((response) => {
        console.log(response)
        if(response.status === 404){
          alert('Credenciales erroneas')
        }else{
          const {token} = response.data
          localStorage.setItem('token', token)
          navigate('/usuarios')
          alert('Logueado')
        }
      })
    } catch (error) {
      console.log(error)
      alert('Error del servidor' + error)
    }
        
    }
    
    return (
        <div className='container w-70 border border-#035020 mt-3 rounded shadow'>
            <div className='row'>
                <div className='col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 ' style={{marginLeft:'-12px',}}>
                    <img src={v.image10} className='img-fluid rounded-start' alt='Logo' />
                </div>
                <div className='col'>
                    <div className='text-end  p-3 rounded '>
                        <Image style={{ width: '100px', height: '80px' }} />
                    <div className='row my-3 text-center  d-flex justify-content-center'>
                        <div className='flex flex-col m-5'>
                        <input className='rounded px-2  mb-3 border border-success' type="text" placeholder='Ingrese su Correo' ref={nombre}/>
                    </div>
                    <div className='flex flex-col m-5'>
                        <input className='p-2 rounded-lg w-60 h-12' type="password" placeholder='Ingrese su Contraseña' ref={password} />
                    </div>
                        </div>
                        <div className='my-3 mx-4 text-center'>
                            <a href="#" className='text-dark fs-6 fw-semibold'>¿Olvidaste tu Contraseña?</a>
                        </div>
                        <div className="d-grid col-6 mx-5 my-5">
                            <Link to="#">
                                <Botones actionLabel="Ingresar" onClick={handleSubmit}/>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};
