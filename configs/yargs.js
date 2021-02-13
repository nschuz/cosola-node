

const argv =  require('yargs')
.option('b' , {
    alias:'base',
    type:'number',
    demandOption: true,
    describe : "Toma la base "
})
.check((argv, options)=>{
   if(isNaN(argv.b)){
      throw 'La base tiene que ser un numero' ;
   }
   else{
       return true;
   }
})
.option('l' , {
    alias: 'Listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Lista en consola la tabla'

})
.option('h' , {
    alias: 'Hasta',
    type: 'number',
    demandOption: false,
    describe: 'Hasta que numero queremos la tabla' 
})
.argv;

//
module.exports = argv;