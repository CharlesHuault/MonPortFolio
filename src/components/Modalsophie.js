import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalsophie.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import montageSophie from '../assets/img/montagepaintsophie.png'
import htmlSophie from '../assets/logos/LogoHTML.svg'
import cssSophie from '../assets/logos/LogoCSS.svg'
import jsSophie from '../assets/logos/LogoJS.svg'
import nodeSophie from '../assets/logos/LogoNODE.svg'
import npmSophie from '../assets/logos/LogoNPM.svg'
import swaggerSophie from '../assets/logos/LogoSWAGGER.svg'
import maqHomeSophie from '../assets/img/Maquette-homepage-sophie.png'
import maqLogSophie from '../assets/img/Maquette-login-sophie.png'
import maqModal1 from '../assets/img/Maquette-modale-1-sophie.png'
import maqModal2 from '../assets/img/Maquette-modale-2-sophie.png'

const Modalsophie = ({ isOpen, closeModal }) => {
    return (
        <ReactModal id='modal-sophie'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageSophie} alt="montage sophie" id='Montagesophie'/>
          <div className='sophie-text'>
            <h2>Frontend du portfolio de Sophie Bluel, Architecte d'intérieur</h2>
            <p><strong>Année:</strong>2023</p>
                    <p><strong>Mission:</strong><br />Projet réalisé dans le cadre de la formation Openclassrooms "Développeur intégrateur web"<br />Développement de la page de connexion "from scratch" et de l'aspect dynamique d'un portfolio d'architecte d'intérieur en lien avec l'API fournie pour le projet. <br />L'objectif était triple: <br />
                        <ul>
                            <li>Afficher tous les projets correspondants aux données de l'API de manière dynamique sur la page d'accueil</li>
                            <li>Pouvoir se connecter en tant qu'administrateur avec les identifiants correspondants dans l'API</li>
                            <li>Créer une modale permettant en tant qu'administrateur d'ajouter et supprimer des éléments de projets dans l'API</li>
                        </ul></p>
            <h3>Technologies utilisées:</h3>
          <div className='tech-container'>
            <div id='htmlsophie'><img src={htmlSophie} alt="Logo Html" /><p>HTML</p></div>
            <div id='csssophie'><img src={cssSophie} alt="Logo Css" /><p>CSS</p></div>
                        <div id='jssophie'><img src={jsSophie} alt="Logo JS" /><p>Javascript</p></div>   
                        <div id='nodesophie'><img src={nodeSophie} alt="Logo Node" /><p>NodeJS</p></div>
            <div id='npmsophie'><img src={npmSophie} alt="Logo npm" /><p>npm</p></div>            
            <div id='swaggersophie'><img src={swaggerSophie} alt="Logo Swagger" /><p>Swagger</p></div>
            </div>
            <div className='liensophie-container'>
              <a href="https://github.com/CharlesHuault/Architecte-Sophie-Bluel" target="_blank" rel="noopener noreferrer"><button id='liensophie'>Voir le repositery Github</button></a>
            </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'> 
          <div className='sophie-homepage-container'>
            <h4>Page d'accueil</h4>
            <img src={maqHomeSophie} alt="Maquette homepage sophie" id='sophiehomepage' />
          </div>
            <div className='sophie-login-modal-container'>
                <div className='sophie-login-container'>
                    <h4>Page de Connexion</h4>
                    <img src={maqLogSophie} alt="Maquette Login Sophie" />
                    </div>
                    <div className='sophie-modal-container'>
                        <h4>Modale d'ajout de projet</h4>
                        <img src={maqModal1} alt="Maquette modale 1" />
                        <img src={maqModal2} alt="Maquette modale 2" />
                    </div>
        </div>
      </div>
    </ReactModal>
    );
};

export default Modalsophie;