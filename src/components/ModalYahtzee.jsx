import React,{useEffect} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalYahtzee = () => {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
   setOpen(true);
  }, [])
  const lorem = (  
    <p>
       <span className="text-2xl">Información general</span>
       <br/>
       <span className="text-sm">
       El objetivo del juego es obtener la mayor puntuación tirando cinco dados. El jugandor lanzará 
        los dados en tres ocasiones para tratar de obtener una de trece combinaciones posibles. El Yahtzee
        se puede jugar entre 2 o mas personas pero tambien se puede jugar en solitario.
        <br/>
         Juego Solitario: La regla principal es tratar de superar tus propias puntuaciones.
       </span>
      <br/>
      <br/>
        <span className="text-2xl">Combinaciones y puntuación</span>
      <br/>
      Las combinaciones se dividen en dos secciones: Superior e Inferior.
      <br/>
      <span className="text-sm">
      En la Sección Superior anotarás puntuaciones de combinaciones de un solo número de puntos en el dado. 
      Debes intentar conseguir la mayor cantidad de dados iguales para que obtengas una mayor puntuación. 
      La puntuación que anotarás será la suma de los puntos del que estés buscando. 
      Por ejemplo, si obtienes tres dados de cinco, vas a multiplicar tres por cinco que es igual a
      quince y esa es tu puntuación. 
      {/* Si la suma de tus puntos en esta sección es mayor de 63, 
      obtendrás una bonificación de 35 puntos. */}
      </span>
      <br/>
      <br/>
      En la Sección Inferior  las combinaciones posibles son más variadas e incluyen:
      <br/>

      <span className="list-disc list-inside text-sm">
        <li>3 de una clase: Debes obtener tres dados iguales. Sumas la puntuación de todos los dados.</li>
        <li>4 de una clase: Debes obtener cuatro dados iguales. Sumas la puntuación de todos los dados.</li>
        <li>Casa llena: Debes obtener tres dados de una clase y dos de otra. Por ejemplo, tres de 1 y dos de 5. Esta jugada vale 25 puntos.</li>
        <li>Escalera pequeña: Debes obtener cuatro dados consecutivos. Por ejemplo: 1, 2, 3 y 4 o 3, 4, 5 y 6. Esta jugada vale 30 puntos.</li>
        <li>Escalera grande: Debes obtener cinco dados consecutivos. Por ejemplo: 1, 2, 3, 4 y 5 o 2, 3, 4, 5 y 6. Esta jugada vale 40 puntos.</li>
        <li>Yahtzee: Debes obtener cinco dados iguales de la misma clase. Esta jugada vale 50 puntos.</li>
        <li>“Chance”: Aquí puedes anotar cualquier jugada que obtengas. La puntuación será la suma de todos los dados. Es una jugada que te permite no perder el tiro cuando no tienes ninguna otra opción de puntuación disponible.</li>
        {/* <li>Bonos Yahtzee: Si en un mismo juego obtienes más de un Yahtzee, y habías marcado 50 en la casilla de Yahtzee, obtendrás una bonificación de 100 puntos. Debes colocar una marca por cada Yahtzee adicional y tomar una ficha bono. Si habías marcado cero en el Yahtzee no obtienes la bonificación pero puedes usar la regla del comodín (ver más adelante).</li> */}
      </span>
    </p>
  );

  return (
    <>
      <button className="button text-2xl text-white pl-4" onClick={onOpenModal}>
        Ver Instrucciones 
      </button>

      <Modal open={open} onClose={onCloseModal}>
        <h1 className="text-4xl">Cómo jugar Yahtzee</h1>
        {lorem}
      </Modal>
    </>
  );
};

export default ModalYahtzee;