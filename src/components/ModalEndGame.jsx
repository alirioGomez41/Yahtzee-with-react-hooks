import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalEndGame = ({scoreFinal, setEndGame}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setEndGame(false);
  };

  useEffect(() => {
      setOpen(true);
  }, [setEndGame])
  return (
    <div>
      <button onClick={onOpenModal}></button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="text-4xl mt-4">Fin del juego</h2>
        <p className="text-2xl">
            Score: {scoreFinal}
        </p>
      </Modal>
    </div>
  );
};

export default ModalEndGame;