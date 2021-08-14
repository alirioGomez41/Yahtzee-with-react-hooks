import React, { useState, useEffect } from 'react'
import { numeroAleatorio, numeroDado } from '../helper';

export const Dado = React.memo(({ valores, dadosseleccionado , dadosSeleccionado, rondaActual, reiniciaronda, setReiniciaRonda }) => {


    const [dado, setDado] = useState(valores);
    const [activo, setActivo] = useState(true);
    const [deshabilitado, setDeshabilitado] = useState(false);
    const {id, numero } = dado;


    useEffect(() => {
        // Genera un numero aleatorio al dado al entrar por primera vez
       setDado({ ...dado, numero:numeroAleatorio() });
       //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 

    // Ronda Siguiente (Cuando presionamos girarDado)
    useEffect(() => {
        //activo quiere decir que no ha sido seleccionado por lo tanto esta disponible
        // Si el dado no esta seleccionado(activo) genera un nuevo numero aleatorio
        if(activo)
            setDado({ ...dado, numero:numeroAleatorio() });

        /* Si el dado esta seleccionado (no activo) eso quiere decir que fue elegido por el usuario y 
            debemos deshabilitarlo para que no vuelva a ser usado en la ronda actual.
        */
        if(!activo && rondaActual > 1)
            setDeshabilitado(true);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rondaActual])

// Reinicia la ronda
    useEffect(() => {
        if(reiniciaronda){
            setActivo(true);
            setDeshabilitado(false);
            setDado({ ...dado, numero:numeroAleatorio() });
        }
        setReiniciaRonda(false);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reiniciaronda])

    /*
        Si esta deshabilitado no me permite seleccionarlo.
        Funcion para seleccionar o deseleccionar un dado
    */ 
    const seleccionarDado = () => {
        if(deshabilitado)return;
        if(activo){
            setActivo(false);
            dadosSeleccionado(d => [...d, dado]);
            
        }else{
            setActivo(true);
            const newSeleccionados = dadosseleccionado.filter(dado => dado.id !== id);
            dadosSeleccionado(newSeleccionados)
        }
    }


    return (
         <button
            onClick={() => seleccionarDado()}
         >
             <img src={`./assets/dados/${numeroDado(numero)}.png`} alt={id} width="75"
                className={`${(!activo || deshabilitado) && 'opacity-50'} m-4`}
             
             />
        </button>
    )
})
