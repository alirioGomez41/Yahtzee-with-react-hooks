import React from 'react'
import { CombinacionItem } from './CombinacionItem';

export const Combinacion = React.memo(({titulo, combinaciones, puntuacion, initialSelect}) => {
    
    const anotarPuntuacion = (combinacion) => {
        puntuacion(combinacion);
    }

    return (
        <div>
            <h2 className="text-center text-5xl p-5">{ titulo }</h2>
            <hr />
            <div className="flex flex-col">
                {combinaciones.map( combinacion => (
                   <CombinacionItem
                        key={combinacion.titleName}
                        combinacion={combinacion}
                        anotarPuntuacion={anotarPuntuacion}
                        initialSelect={initialSelect}
                   />
                ))}
{/*      
                {titulo === 'Superior'? 
                <span className={ `flex justify-between border py-6 sm:py-2 px-4`}>
                        <h3> Bonificación </h3>
                </span>
                :
                <span className={ `flex justify-between border py-6 sm:py-2 px-4`}>
                    <h3> Bonos Yahtzee </h3>
                </span>
                } */}
            </div>
        </div>
    )
})
