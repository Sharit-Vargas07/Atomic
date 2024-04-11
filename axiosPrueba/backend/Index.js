import express  from 'express' 
import  body_parser from 'body-parser'
import cors from 'cors'
import rutaValidacion from './src/routes/autenticacion.route.js'
import rutaUsuario from './src/routes/Usuarios.route.js'
import Rutainversiones from './src/routes/Inversiones.route.js'


//servidor
const servidor = express()
servidor.use(cors())
servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extended: false}))
servidor.listen(3000, () =>{
    console.log("esta funcionando")
})

//rutas
servidor.use(rutaValidacion)
servidor.use('/usuarios',rutaUsuario)
servidor.use(Rutainversiones)


//carpetas documentacion
servidor.set('view engine', 'ejs');
servidor.set('views','./views');
servidor.get('/documents',(req,res)=>{
    res.render('document.ejs');
})
servidor.use(express.static('./public'));

