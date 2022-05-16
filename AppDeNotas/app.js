let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
           tareas.forEach((e, index) => {
            console.log(`${index + 1}. ${e.titulo} - ${e.estado}`);
           });
        console.log()
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;
    
    case 'agregar':
        let agregarTitulo = () => nuevaTarea.titulo = process.argv[2];
        let nuevaTarea = {
            titulo: "",
            estado: ""
        }
        console.log('');
        console.log('Ingrese titulo para su nueva tarea:'); 
        console.log('Ingrese estado para su nueva tarea:');
        let agregarEstado = () => nuevaTarea.estado = process.argv[2];
        break;
            

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
