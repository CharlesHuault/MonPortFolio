import React from 'react';
import '../styles/components/modalgrim.scss'
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import montageGrim from '../assets/img/montagegrim.png'
import nodeGrim from '../assets/logos/LogoNODE.svg'
import npmGrim from '../assets/logos/LogoNPM.svg'
import expressGrim from '../assets/logos/LogoEXPRESS.svg'
import mongodbGrim from '../assets/logos/LogoMONGODB.svg'
import grimHome from '../assets/img/grimhomepage.png'
import grimLivre from '../assets/img/grimpagelivre.png'
import grimAjout from '../assets/img/grimpageajout.png'
import grimLogin from '../assets/img/grimpagelogin.png'

const Modalgrim = ({isOpen, closeModal}) => {
    return (
        <ReactModal id='modal-grim'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageGrim} alt="montage MonVieuxGrimoire" id='Montagegrim'/>
          <div className='grim-text'>
            <h2>Backend de l'application Mon Vieux Grimoire</h2>
            <p><strong>Année:</strong>2023</p>
                    <p><strong>Mission:</strong><br />Projet réalisé dans le cadre de la formation Openclassrooms "Développeur intégrateur web"<br />Création du backend d'une application de notations de livres. <br />Mise en place d'une base de données pour stocker les identifiants des usagers et les données qu'ils peuvent poster: l'ajout d'un livre et ses informations et la possibilité de noter un :livre posté par un autre utilisateur. <br />Création de l'API communiquant entre la base de données créée et l'application frontend fournie pour le projet</p>
            <h3>Technologies utilisées:</h3>
            <div className='tech-container'>
                <div id='nodegrim'><img src={nodeGrim} alt="Logo NodeJs" /><p>NodeJs</p></div>
                <div id='npmgrim'><img src={npmGrim} alt="Logo npm" /><p>npm</p></div>
                <div id='expressgrim'><img src={expressGrim} alt="Logo Express" /><p>ExpressJs</p></div>
                <div id='mongodbgrim'><img src={mongodbGrim} alt="Logo Mongodb" /><p>MongoDB</p></div>
            </div>
            <div className='liengrim-container'>
              <a href="https://github.com/CharlesHuault/MonVieuxGrimoire" target="_blank"><button id='liengrim'>Voir le repositery Github</button></a>
            </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <h4>Page d'accueil affichant tous les livres ajoutés par les utilisateurs</h4>
            <img src={grimHome} alt="Screenshot Homepage MonVieuxGrimoire" id='screenhomegrim' />
            <h4>Page affichant un livre en particulier ajouté par un utilisateur</h4>
            <img src={grimLivre} alt="Screenshot Page Livre MonVieuxGrimoire" id='screenbookgrim' />
            <h4>Page avec le formulaire permettant à un utilisateurde créer un nouveau livre</h4>
            <img src={grimAjout} alt="Screenshot Page Ajout MonVieuxGrimoire " id='screenajoutgrim' />
            <h4>Page permettant de créer un compte utilisateur ou se connecter si on en possède déjà un</h4>
            <img src={grimLogin} alt="Screenshot Page Login MonVieuxGrimoire " id='screenlogingrim' />
      </div>
    </ReactModal>
    );
};

export default Modalgrim;