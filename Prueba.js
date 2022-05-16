function noParesDeContarImparesHasta(numero){

    let resultado = null

    for (let contador = 0; contador < numero; contador++){
        if (contador % 2 !== 0){
            resultado = resultado ++
        } else {
            resultado = resultado + 0
        }
        
    }
console.log(resultado)
}

console.log(noParesDeContarImparesHasta(8))
