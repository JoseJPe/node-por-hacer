const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            demand: true,
            desc: 'marca como completado o pendiente la tarea'
        }

    })
    .command('borrar', 'eliminar un elemento', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'marcar la tarea que deseas borrar'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}