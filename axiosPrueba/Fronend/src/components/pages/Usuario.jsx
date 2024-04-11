import React, { useEffect, useRef, useState } from 'react';
import UsuarioModal from '../Templates/Templeteusuario.jsx';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { ButtonActualizar } from '../atomos/ButtonActualizar.jsx';
import { ButtonDesactivar } from '../atomos/ButtonDesactivar.jsx';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Usuario() {

    const baseURL = 'http://localhost:3000/usuarios/listarUsuario';
    const token = localStorage.getItem('token');

    const [datos, setData] = useState([]);

    useEffect(() => {
        try {
            axios.get(baseURL, { headers: { token: token } }).then((response) => {
                console.log(response);
                setData(response.data);
            });
        } catch (error) {
            console.log('Error de servidor' + error);
        }
    }, [token]);

    const columns = [

        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true
        },
        {
            name: 'Apellido',
            selector: row => row.apellido,
            sortable: true
        },
        {
            name: 'Correo',
            selector: row => row.correo,
            sortable: true
        },
        {
            name: 'Contraseña',
            selector: row => row.password,
            sortable: true
        },
        {
            name: 'Estado',
            selector: row => row.estado,
            sortable: true
        },
        {
            name: 'Acciones',
            cell: row => <>
                <ButtonActualizar variant="primary" click={() => handleToggle('update', row)} />
                <ButtonDesactivar variant="danger" click={() => handleDesactivar(row.id_usuario)} />
            </>
        }
    ];

    function handleFilter(event) {
        const newData = datos.filter(row => {
            return row.valor.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setData(newData);
    }

    

    const handleDesactivar = (id_usuario) => {
        try {
            axios.put(`http://localhost:3000/usuarios/desactivarUsuario/${id_usuario}`, null, { headers: { token: token } }).then((response) => {
                console.log(response.data);
                if (response.status == 200) {
                    alert('Usuario desactivado con exito');
                } else {
                    alert('Error');
                }

            });
        } catch (error) {
            alert('Error de servidor' + error);
        }

    };

    const [modalOpen, setModalOpen] = useState(false);
    const [mode, setMode] = useState('create');
    const [initialData, setInitialData ] = useState(null)

    const handleToggle = (mode, initialData) => {
        setInitialData(initialData)
        setModalOpen(true)
        setMode(mode)
    }

    const handleSubmit = () => {
        try {
            if(mode === 'create'){

            }else if(mode === 'update'){

            }
        } catch (error) {
            
        }
    }
    return (

        <div>
            <div className='w-full flex flex-col justify-center items-center p-10'>

                <Button onClick={() => handleToggle('create')} variant="success">Registrar</Button>
                <UsuarioModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title={mode === 'create' ? 'Registrar usuarios' : 'Actualizar usuarios'}
                    actionLabel={mode === 'create' ? 'Registrar' : 'Actualizar'}
                    mode={mode}
                    handleSubmit={handleSubmit}
                    initialData={initialData}
                />

                <DataTable columns={columns} data={datos} title={'usuarios registrados'} />

            </div>
        </div>
    );
}
