const fs= require('fs');
const  colors = require('colors');
//crear funcion multiplicar 

const crearArchivo = async(base=5 , listar=false , hasta=10)=>{
let salida ='';
for(let i=1; i<=hasta; i++){
    salida +=(`${base} x ${i} = ${base*i} \n`);

}

if(listar){
    console.log(colors.rainbow(salida));
}

/* fs.writeFile('tabla-5.txt' , salida , (err)=>{
    if(err) throw err;
    console.log("Archivo creado");
}); */

fs.writeFileSync(`./salida/Tabla-${base}.txt` ,salida);

return `Tabla-${base}.txt`;

}


module.exports={
    crearArchivo : crearArchivo
}