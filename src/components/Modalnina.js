import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalnina.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modalnina = ({ isOpen, closeModal }) => {
    return (
        <ReactModal id='modal-nina'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src="./montagenina.png" alt="montage nina" id='Montagenina'/>
          <div className='nina-text'>
            <h2>Débuggage et optimisation SEO d'un portfolio de photographe</h2>
            <p><strong>Année:</strong>2023</p>
            <p><strong>Mission:</strong><br />Projet réalisé dans le cadre de la formation Openclassrooms "Développeur intégrateur web"<br />L'objectif de ce projet est de découvrir le concept du SEO et apprendre à en maîtriser les bases mais surtout à appliquer les modifications nécessaires à son amélioration au niveau technique</p>
            <h3>Technologies utilisées:</h3>
          <div className='tech-container'>
            <div id='lighthousenina'><img src="./LogoLIGHTHOUSE.svg" alt="Logo Lighthouse" /><p>Lighthouse</p></div>
            <div id='wavenina'><img src="./LogoWAVE.svg" alt="Logo Wave" /><p>Wave</p></div>
            </div>
                <div className='liennina-container'>
                    <a href="https://charleshuault.github.io/Nina-Carducci/" target="_blank"><button id='liensitenina'>Visitez le site optimisé</button></a>
                    <a href="https://github.com/CharlesHuault/Nina-Carducci" target="_blank"><button id='liengithubnina'>Voir le repositery Github</button></a>                     
            </div>        
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'>         
            <h4>Rapport Lighthouse après optimisations</h4>
                <img src="./lighthouseok.png" alt="Screenshot lighthouse" id='screenlighthouse' />
                
                    <h4>Rapport Wave avant et après optimisations</h4>
                <div className='wave-container'>    
            <img src="./waveavmodif.png" alt="Screenshot Wave avant optimisations" id='screenwaveav' />
            <img src="./waveapmodif.png" alt="Screenshot Wave avant optimisations" id='screenwaveap' />
                </div>
      </div>
    </ReactModal>
    );
};

export default Modalnina;