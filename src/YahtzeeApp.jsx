import React,{ useState, useReducer, useEffect} from 'react'
import { Dado } from './components/Dado'
import { Combinacion } from './components/Combinacion';
import { dadosReducer } from './components/dadosReducer';
import { superior, inferior } from './combinaciones';
import ModalYahtzee from './components/ModalYahtzee';
import ModalEndGame from './components/ModalEndGame';

const Dados = [
    {id:'dado1', numero:1},
    {id:'dado2', numero:1},
    {id:'dado3', numero:1},
    {id:'dado4', numero:1},
    {id:'dado5', numero:1}
]
const RONDAS = 3;
const TURNOS = 13

export const YahtzeeApp = () => {
    

    const [dadosseleccionado, dadosSeleccionado] = useState([])
    const [rondaActual, setRondaActual] = useState(1);
    const [turnoActual, setTurnoActual] = useState(1);
    const [reiniciaronda, setReiniciaRonda] = useState(false);
    const [initialSelect, setInitialSelect] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [scoreFinal, setScoreFinal] = useState(0);

// Estado global de las puntuaciones
    const [score, dispatch] = useReducer(dadosReducer, 0);
    const puntuacion = (combinacion) => {

        if(dadosseleccionado.length > 0){
            dispatch({
                type:combinacion,
                payload:dadosseleccionado
            });
            reiniciarRonda();
        }else{
            dispatch({
                type: '',
                payload: []
            });
            reiniciarRonda();
        }

    }

    /* 
        Hace girar los dados   
    */
    const girarDados = () => {
        if(rondaActual < RONDAS){
            setRondaActual(rondaActual + 1);
        }
    }

    /*
        Reinicia la ronda
    */
    const reiniciarRonda = () => {
        setReiniciaRonda(true);
        setRondaActual(1);
        setTurnoActual(turnoActual + 1);
        dadosSeleccionado([]);
        setInitialSelect(false);
    } 
    // Reinicia la partida
    const reiniciarPartida = () => {
        reiniciarRonda();
        setTurnoActual(1);
        setInitialSelect(true)
        dispatch({type:'Fin'});
    } 

    useEffect(() => {
    //    vigila los turnos
        if(turnoActual > TURNOS){
            setScoreFinal(score);
            setEndGame(true)
            reiniciarPartida(); 
        }
     //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [turnoActual])
    return (
        <div className="bg-green-300 ">
            {endGame && <ModalEndGame scoreFinal={scoreFinal} setEndGame={setEndGame}/>}

            <div className="w-full bg-blue-600 sm:w-9/12 lg:w-7/12 mx-auto flex flex-col">
                <ModalYahtzee/>
                <p className="text-2xl text-white pl-4">Score: {score}</p>
                <p className="text-2xl text-white pl-4">Turno Actual: {turnoActual}/13</p>
                <p className="text-2xl text-white pl-4">Giro Actual: {rondaActual}/3</p>
            </div >

            {/* Seccion de los dados */}

            <header className="w-full bg-blue-600 sm:w-9/12 lg:w-7/12 mx-auto flex flex-col">
                <h1 className="text-center my-8 text-6xl text-white">Yahtzee</h1>
                <div className="flex justify-around flex-wrap">
                    {Dados.map(dado => (
                        <Dado
                            key={dado.id}
                            valores={dado}
                            dadosseleccionado={dadosseleccionado}
                            dadosSeleccionado={dadosSeleccionado}
                            rondaActual={rondaActual}
                            reiniciaronda={ reiniciaronda }
                            setReiniciaRonda={setReiniciaRonda}
                        />
                    ))}
                </div>

                <span
                    className="flex justify-center"
                >
                    <button
                        onClick={girarDados}
                        className={`items-center my-5 hover:bg-white hover:text-black py-2 px-6 rounded text-white ${rondaActual === 3? 'cursor-not-allowed bg-purple-300' : 'bg-purple-600'} `}
                    >
                        Girar
                    </button>
                </span>
            </header>
            {/*  End Seccion de los dados*/}


            {/* Seccion de abajo */}
            <section className="w-full bg-white sm:w-9/12 lg:w-7/12 mx-auto">
               <Combinacion
                    titulo="Superior"
                    combinaciones={superior}
                    puntuacion={puntuacion}
                    initialSelect={initialSelect}
               />

                <Combinacion
                    titulo="Inferior"
                    combinaciones={inferior}
                    puntuacion={puntuacion}
                    initialSelect={initialSelect}
               />
            </section>
            
            
        </div>
    )
}
