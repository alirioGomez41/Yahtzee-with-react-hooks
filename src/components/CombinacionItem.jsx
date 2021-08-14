import React, { useEffect, useState } from 'react'

export const CombinacionItem = React.memo(({ combinacion, anotarPuntuacion, initialSelect}) => {

    const [seleccionada, setSeleccionada] = useState(false);
    const clickButton = () =>{
        anotarPuntuacion(combinacion.titleName);
        setSeleccionada(true);
    } 

    useEffect(() => {
        if(initialSelect){
            setSeleccionada(false);
        }
        
    }, [initialSelect])

    return (
    <>
    {
        !seleccionada || combinacion.titleName === 'Yahtzee' || combinacion.titleName === 'Bonos Yahtzee'?
            (<button  
                onClick={clickButton }
                className="border py-6 sm:py-2 px-4 hover:bg-gray-300"
            >
                <span className={ ` sm:flex justify-between `}>
                        <h3 className="text-2xl sm:text-base">{ combinacion.titleName }</h3>
                        <p>{ combinacion.description }</p>
                </span>
            </button>):
            (<button 
                className="border py-6 sm:py-2 px-4" 
                disabled
             >
                <span className={ `flex justify-between line-through`}>
                        <h3 className="text-2xl sm:text-base">{ combinacion.titleName }</h3>
                        <p>{ combinacion.description }</p>
                </span>
            </button>)
    }

    
    
    </>
    )
})