import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalqwenta.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import montageQwenta from '../assets/img/montageqwenta.png'
import trelloQwenta from '../assets/logos/LogoTRELLO.svg'
import wakeletQwenta from '../assets/logos/LogoWAKELET.svg'
import figmaQwenta from '../assets/logos/LogoFIGMA.svg'
import screenTrello from '../assets/img/screentrello.png'
import screenWakelet from '../assets/img/screenwakelet.png'
import screenSpeTech from '../assets/img/screenspetechniques.png'

const Modalqwenta = ({ isOpen, closeModal }) => {
    return (
     <ReactModal id='modal-qwenta'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageQwenta} alt="montage qwenta" id='Montageqwenta'/>
          <div className='qwenta-text'>
            <h2>Gestion de projet pour MenuMaker</h2>
            <p><strong>Année:</strong>2023</p>
            <p><strong>Mission:</strong><br />Projet réalisé dans le cadre de la formation Openclassrooms "Développeur intégrateur web"<br />Simulation de gestion de projet dans la création d'une application appelée MenuMaker <br />L'objectif de ce projet est d'avoir une première prise en main des méthodes, documents et outils de gestion de projet afin de se familiariser avec ces éléments</p>
            <h3>Technologies utilisées:</h3>
          <div className='tech-container'>
            <div id='trellomenu'><img src={trelloQwenta} alt="Logo Trello" /><p>Trello</p></div>
            <div id='figmamenu'><img src={figmaQwenta} alt="Logo Figma" /><p>Figma</p></div>
            <div id='wakeletmenu'><img src={wakeletQwenta} alt="Logo Wakelet" /><p>Wakelet</p></div>
          </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'>         
            <h4>Outil de gestion de projet Trello</h4>
            <img src={screenTrello} alt="Screenshot Trello" id='screentrello' />
            <h4>Outil de veille Wakelet</h4>
            <img src={screenWakelet} alt="Screenshot Wakelet" id='screenwakelet' />
            <h4>Document de spécifications techniques</h4>
            <img src={screenSpeTech} alt="Screenshot spécifications" id='screenspetechniques' />
      </div>
    </ReactModal>
    );
};

export default Modalqwenta;