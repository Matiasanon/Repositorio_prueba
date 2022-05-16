let fs = require ('fs')

let tareasJson = fs.readFileSync('./tareas.json')

let archivoConvertido = JSON.parse(tareasJson)

console.log(archivoConvertido)


let archivoTareas = require ('./tareas.json')

console.log(archivoTareas)