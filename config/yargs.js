const argv = require('yargs')
            .command('crear', 'Crea una tarea', {
                descripcion: {
                    demand: true,
                    alias: 'd'
                }
            })
            .command('actualizar', 'Actualiza una tarea por hacer', {
                descripcion: {
                    demand: true,
                    alias: 'a',
                    desc: 'Actualizacion de la tarea por hacer'
                },
                completado: {
                    default: true,
                    alias: 'c',
                    desc: 'Marca como completado'
                }
            })
            .command('borrar', 'Borra una tarea', {
                descripcion: {
                    demand: true,
                    alias: 'b',
                    desc: 'Borra una tarea'
                }
            })
            .help()
            .argv;
                
module.exports = {
    argv
}
 