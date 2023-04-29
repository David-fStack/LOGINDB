const express = require('express');
const dotenv = require('dotenv');
const cookieParser = ('cookie-parser');

const app = express();

//seteamos el motor de plantillas
app.set('view engine', 'ejs')

//Seteamos la carpeta public para archivos estaticos
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Seteamos la variables de entorno
dotenv.config({path: './env/.env'});

//Seteamos las cookies
// app.use(cookieParser)


//llamada al router
app.use('/', require('./routes/router'))


//Configuracion de puerto
app.listen(5000, ()=>{
    console.log('SERVER IP RUNNING IN http://localhost:5000');
})