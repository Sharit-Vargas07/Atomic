import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Botones from '../atomos/Botones.jsx'
import Modal from '../organismos/Modal.jsx'

const FormLoginUser = ({ actionLabel, mode, initialData }) => {

    const token = localStorage.getItem('token')

   
    const nombre = useRef(null)
    const apellido = useRef(null)
    const correo = useRef(null)
    const password = useRef(null)
    const rol = useRef(null)

    useEffect(() => {
        if(mode == 'update' && initialData){
        
            nombre.current.value = initialData.nombre
            apellido.current.value = initialData.apellido
            correo.current.value = initialData.correo
            password .current.value = initialData.password
            rol .current.value = initialData.rol
        }
    }, [mode, initialData])

     const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const data = {

                nombre: nombre.current.value,
                apellido: apellido.current.value,
                 correo:correo.current.value,
                password:password.current.value,
                rol:rol.current.value,
            }

            if(mode === 'create'){
                const baseURL = 'http://localhost:3000/usuarios/registrarUsuario'
    
                axios.post(baseURL, data).then((response) => {
                    console.log(response)

                    if(response.status == 200){
                        setModalOpen(true)
                    }else{
                        alert('Error de registro')
                    }
                    
                })
             } else if(mode === 'update'){
                const updateURL = `http://localhost:3000/usuarios/actualizarUsuario/${initialData.id_usuario}`

                axios.put(updateURL, {headers: {token:token}}, data).then((response) => {
                    console.log(response)

                    if(response.status == 200){
                        setModalOpen(true)
                    }else{
                        alert('Error de actualizar')
                    }
                })
            } 
        } catch (error) {
            alert('Error de servidor' + error)
        }
    }

    const [modalOpen, setModalOpen ] = useState(false)

    return (
        <>
            <Modal 
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                label={mode === 'update' ? 'Usuario actualizado con éxito' : 'Usuario registrado con éxito'}
            />
    
            <form method='post' onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label className='form-label'> Nombre: </label>
                            <input 
                                className='form-control mb-3' 
                                name='nombre' 
                                type="text" 
                                placeholder='Ingrese el nombre' 
                                ref={nombre} 
                                required={true}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label className='form-label'> Apellido: </label>
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
                            <label className='form-label'> Correo: </label>
                            <input 
                                className='form-control mb-3' 
                                name='correo' 
                                type="text" 
                                placeholder='Ingrese el correo' 
                                ref={correo} 
                                required={true}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label className='form-label'> Contraseña: </label>
                            <input 
                                className='form-control mb-3' 
                                name='password' 
                                type="password" 
                                placeholder='Ingrese la contraseña' 
                                ref={password} 
                                required={true}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label className='form-label'> Rol: </label>
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
                    <div className='row'>
                        <div className='col-md-12'>
                            <Botones actionLabel={actionLabel} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}    

export default FormLoginUser   