import { Router } from "express"
import  {actualizarUsuario, listarUsuarios, buscarUsuario, desactivarUsuario, registrarUsuarios} from '../controllers/Usuarios.controller.js';
import {validarUsuario, validarUsu} from '../../validate/Usuarios.validate.js'
import { validarToken } from '../controllers/autenticacion.js'

const rutaUsuario = Router();

rutaUsuario.get('/listarUsuario', validarToken,listarUsuarios);  
rutaUsuario.post('/registrarUsuario',registrarUsuarios);
rutaUsuario.put('/desactivarUsuario/:id_usuario',validarToken, desactivarUsuario);
rutaUsuario.put('/actualizarUsuario/:id_usuario',validarToken, validarUsu,actualizarUsuario);
rutaUsuario.get('/buscarUsuarios/:id_usuario',validarToken, buscarUsuario);


export default rutaUsuario;
