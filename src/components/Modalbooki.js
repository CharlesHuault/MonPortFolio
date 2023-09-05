import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalbooki.scss'

const Modalbooki = ({ isOpen, closeModal }) => {
  return (
    <ReactModal id='modal-booki'isOpen={isOpen} onRequestClose={closeModal}>
      {/* Contenu de la modale pour la carte "Booki" */}
      <h2>Modal pour la carte "Booki"</h2>
      <p>Contenu spécifique pour la carte "Booki" ici.</p>
      <button onClick={closeModal}><i class="fa-solid fa-x"></i></button>
    </ReactModal>
  );
};

export default Modalbooki;