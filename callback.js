function agregarHttp(url) {
    return "http://" + url
}

function procesar(miArray, funcion){
    let arrayFinal = []
        for (contador = 0; contador < miArray.lenght; contador++){
            arrayFinal.push(funcion(miArray[contador]))
        }
    return arrayFinal
}

console.log(procesar(["www.ole.com", "www.asd.com"], agregarHttp))