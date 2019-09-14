const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
let comando = argv._[0];
const colors = require('colors');

switch(comando) {
    case 'crear':
        tarea = porHacer.crear(argv.desc);
        console.log(tarea);
    break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado)
        }
    break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, completado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
    default:
        console.log('Comando no reconocido')
}