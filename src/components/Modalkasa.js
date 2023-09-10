import React from 'react';
import '../styles/components/modalkasa.scss'
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import montageKasa from '../assets/img/montagekasa2.png'
import reactKasa from '../assets/logos/LogoREACT.svg'
import sassKasa from '../assets/logos/LogoSASS.svg'
import npmKasa from '../assets/logos/LogoNPM.svg'
import kasaHome from '../assets/img/kasascreen.png'
import kasaLogement from '../assets/img/logementkasa.png'
import kasaAbout from '../assets/img/aproposkasa.png'

const Modalkasa = ({isOpen, closeModal}) => {
    return (
        <ReactModal id='modal-kasa'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageKasa} alt="montage kasa" id='Montagekasa'/>
          <div className='kasa-text'>
            <h2>Frontend en ReactJs pour Kasa, application de location de logements</h2>
            <p><strong>Année:</strong>2023</p>
                    <p><strong>Mission:</strong><br />Projet réalisé dans le cadre de la formation Openclassrooms "Développeur intégrateur web"<br />Développement de l'application en ReactJs pour Kasa, site de location de logements entre particuliers <br />Le contenu est intégré dynamiquement à partir d'un fichier JSON contenant une liste de données pour tous les logements <br />Le style contient des animations et est écrit en Sass</p>
            <h3>Technologies utilisées:</h3>
          <div className='tech-container'>
            <div id='reactkasa'><img src={reactKasa} alt="Logo ReactJs" /><p>ReactJs</p></div>
            <div id='sasskasa'><img src={sassKasa} alt="Logo Sass" /><p>Sass</p></div>
            <div id='npmkasa'><img src={npmKasa} alt="Logo npm" /><p>npm</p></div>            

            </div>
            <div className='lienkasa-container'>
              <a href="https://github.com/CharlesHuault/Kasa" target="_blank"><button id='lienkasa'>Voir le repositery Github</button></a>
            </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <h4>Page d'accueil</h4>
            <img src={kasaHome} alt="Screenshot Homepage Kasa" id='screenhomekasa' />
            <h4>Page d'un logement</h4>
            <img src={kasaLogement} alt="Screenshot Logement Kasa" id='screenlogkasa' />
            <h4>Page A propos</h4>
            <img src={kasaAbout} alt="Screenshot a propos Kasa" id='screenaboutkasa' />
      </div>
    </ReactModal>
    );
};

export default Modalkasa;