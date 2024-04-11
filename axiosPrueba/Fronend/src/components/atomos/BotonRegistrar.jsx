import React from 'react'
import { Link } from 'react-router-dom'

export const BotonRegistrar = (props) => {
  return (
    <button className='btn btn-success btn-lg  ' onClick={props.click}>
    <Link className='text-decoration-none text-white' to={props.link}>Registrar</Link>
    </button>
  )
}
