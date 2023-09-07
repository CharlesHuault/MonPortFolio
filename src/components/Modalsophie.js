import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalsophie.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modalsophie = ({ isOpen, closeModal }) => {
    return (
        <ReactModal id='modal-sophie'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src="./montagepaintsophie.png" alt="montage sophie" id='Montagesophie'/>
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
            <div id='htmlsophie'><img src="./LogoHTML.svg" alt="Logo Html" /><p>HTML</p></div>
            <div id='csssophie'><img src="./LogoCSS.svg" alt="Logo Css" /><p>CSS</p></div>
                        <div id='jssophie'><img src="./LogoJS.svg" alt="Logo JS" /><p>Javascript</p></div>   
                        <div id='nodesophie'><img src="./LogoNODE.svg" alt="Logo Node" /><p>NodeJS</p></div>
            <div id='npmsophie'><img src="./LogoNPM.svg" alt="Logo npm" /><p>npm</p></div>            
            <div id='swaggersophie'><img src="./LogoSWAGGER.svg" alt="Logo Swagger" /><p>Swagger</p></div>
            </div>
            <div className='liensophie-container'>
              <a href="https://github.com/CharlesHuault/Architecte-Sophie-Bluel" target="_blank"><button id='liensophie'>Voir le repositery Github</button></a>
            </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'> 
          <div className='sophie-homepage-container'>
            <h4>Page d'accueil</h4>
            <img src="./Maquette-homepage-sophie.png" alt="Maquette homepage sophie" id='sophiehomepage' />
          </div>
            <div className='sophie-login-modal-container'>
                <div className='sophie-login-container'>
                    <h4>Page de Connexion</h4>
                    <img src="./Maquette-login-sophie.png" alt="Maquette tablette booki" />
                    </div>
                    <div className='sophie-modal-container'>
                        <h4>Modale d'ajout de projet</h4>
                        <img src="./Maquette-modale-1-sophie.png" alt="Maquette modale 1" />
                        <img src="./Maquette-modale-2-sophie.png" alt="Maquette modale 2" />
                    </div>
        </div>
      </div>
    </ReactModal>
    );
};

export default Modalsophie;