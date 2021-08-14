
export const numeroDado =  (number) =>  {
    switch (number) {
        case 1:
            return 'one'
        case 2:
            return 'two'
        case 3:
            return 'three'
        case 4:
            return 'four'
        case 5:
            return 'five'
        case 6:
            return 'six'
        default:
            return 'No existe este dado'
    }
}

// Genera un umero aleatorio del 1 al 6
export const numeroAleatorio = () =>  Math.floor(Math.random() * (7 - 1)) + 1;

// Total de un arreglo dependiendo del numero
export const obtenerTotal = (arreglo, numero) => { 
    const array = arreglo.filter(num => num.numero === numero);  
    const total = array.reduce(totalArray);
    return total.numero;
}

export const totalArray = ((acumulador, valorActual) => ({numero: acumulador.numero + valorActual.numero }) );


// Verifica que haya elementos repetido
export const cuantosDeUnaClase = (arreglo, numRepeticiones) => {

    let copiaArreglo = arreglo;
  
    while(copiaArreglo.length >= numRepeticiones){
        let elemento = copiaArreglo[0];
        let repetidos = copiaArreglo.filter( item => item.numero === elemento.numero);
        if(repetidos.length >= numRepeticiones){
            return repetidos.slice(0,numRepeticiones);
        }else{
            copiaArreglo = copiaArreglo.filter(item => item.numero !== elemento.numero);
        }
    }
    // Si no cumple la condicion regresa un dado con valor de cero para poder usarlo en el reduce xd
    return [{id:'dado', numero:0}];
}

// verifica que haya numeros consecutivos
export const esConsecutivo = (arreglo, numero) => {    
   const newArray = arreglo.map( item => item.numero);   
   const arrayOrdenado = newArray.sort((a, b) => a - b)
       
   let contador = 1;

    arrayOrdenado.reduce(function(valorAnterior, valorActual){
       if(valorAnterior < valorActual && (valorActual - 1) === valorAnterior){
           contador++
        }    
       return valorActual;
   });
   return contador >= numero;
}

// verifica que todo los elementos del arreglo sean iguales
export const sonElementosIgualesArray = (arreglo) => {
    const newArray = arreglo.map( item => item.numero);
    let esIgual = true;
    newArray.reduce(function(valorAnterior, valorActual){
       if(valorActual !== valorAnterior){
           esIgual = false;
           return false;
        }    
       return valorActual;
    });
    return esIgual;   
}
