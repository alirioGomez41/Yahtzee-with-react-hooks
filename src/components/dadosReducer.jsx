import { obtenerTotal, cuantosDeUnaClase, totalArray, esConsecutivo, sonElementosIgualesArray } from "../helper";


export const dadosReducer = (state = 0, action) => {
    let array;
    switch (action.type) {
        case 'Unos':
            return state + obtenerTotal(action.payload, 1);
        case 'Doses':
            return state + obtenerTotal(action.payload, 2);
        case 'Treses':
            return state + obtenerTotal(action.payload, 3);
        case 'Cuatros':
            return state + obtenerTotal(action.payload, 4);
        case 'Cincos':
            return state + obtenerTotal(action.payload, 5);
        case 'Seises':
            return state + obtenerTotal(action.payload, 6);
        case '3 de una clase':      
            array = cuantosDeUnaClase(action.payload, 3);
            return state + array.reduce(totalArray).numero;
        case '4 de una clase':      
            array = cuantosDeUnaClase(action.payload, 4);
            return state + array.reduce(totalArray).numero;
        case 'Casa Llena':
            const array1 = cuantosDeUnaClase(action.payload, 3);
            const array2 = cuantosDeUnaClase(action.payload, 2);
            const total = ((array1.length === 3 && array2.length === 2) || (array1.length === 2 && array2.length === 3))? (25) : (0);
            return state + total;
        case 'Escalera Pequeña':
            const consecutivo = esConsecutivo(action.payload, 4);
            const total1 = consecutivo? (30) : (0);
            return state + total1;
        case 'Escalera Grande':
            const consecutivo1 = esConsecutivo(action.payload, 5);
            const total2 = consecutivo1? (30) : (0);
            return state + total2;
        case 'Yahtzee':
            const igual = sonElementosIgualesArray(action.payload);
            const total3 = igual? (50):(0);
            return state + total3;
        case 'Chance':
            return state + action.payload.reduce(totalArray).numero;
        case 'Fin':
            return 0;
        default:
            return state + 0;
    }
}


