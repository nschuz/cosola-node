//requerimos un paquete de conde 
const fs= require('fs');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./configs/yargs')

console.clear();


  crearArchivo(argv.b , argv.l , argv.h)
.then(nombreArchivo => console.log(nombreArchivo.green , 'creado'.cyan))
.catch(err=>console.log(err));  


