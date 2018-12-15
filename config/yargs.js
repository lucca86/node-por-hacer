const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    desc: 'Marca como completado o pendiente la tarea',
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento de ToDo', {
        descripcion
    })
    .command('actualizar', 'Actualizael estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento del ToDo', {
        descripcion
    })

.help()
    .argv;

module.exports = {
    argv
}