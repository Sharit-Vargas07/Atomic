import React from 'react'
import Header from '../components/organismos/Header/Header'
import Botones from '../components/atomos/Botones'

function Reportes() {
  return (
    <div>
        <Header/>
        <div className='w-2/6 ml-10 p-20'>
            <h1>Reporte Ingresos y Egresos </h1>
            <Botones children='Enviar' />
        </div>
    </div>
  )
}

export default Reportes