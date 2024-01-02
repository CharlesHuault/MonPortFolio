import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalbooki.scss'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logoHTML from '../assets/logos/LogoHTML.svg'
import logoCSS from '../assets/logos/LogoCSS.svg'
import maqDeskBooki from '../assets/img/MaqDeskBooki.png'
import logoGithub from '../assets/logos/LogoGITHUB.svg'
import logoFigma from '../assets/logos/LogoFIGMA.svg'
import logoVscode from '../assets/logos/LogoVSCODE.svg'
import logoNpm from '../assets/logos/LogoNPM.svg'


// Composant de la modale du projet "Booki"
const Modalbooki = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
  
  return (
    <ReactModal id='modal-booki'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={maqDeskBooki} alt="maquette booki" id='Maquettebooki'/>
          <div className='booki-text'>
            <h2>{t('bookimodal.title')}</h2>
            <p><strong className='addspace'>{t('bookimodal.year')}</strong>2023</p>
          <p><strong className='addspace'>Contexte:</strong><br />{t('bookimodal.text1')}<br />{t('bookimodal.text2')}</p>
          <p><strong className='addspace'>Réalisations:</strong><br />{t('bookimodal.text3')} <br />{t('bookimodal.text4')} <br />{t('bookimodal.text5')}</p>
            <h3><strong className='addspace'>{t('bookimodal.tech')}</strong></h3>
          <div className='tech-container'>
            <div id='htmlbooki'><img src={logoHTML} alt="Logo Html" /><p>HTML</p></div>
            <div id='cssbooki'><img src={logoCSS} alt="Logo Css" /><p>CSS</p></div>
            <div id='npmbooki'><img src={logoNpm} alt="Logo npm" /><p>npm</p> </div>
            <div id='githubbooki'><img src={logoGithub} alt="Logo Github" /><p>GitHub</p> </div>
            <div id='figmabooki'><img src={logoFigma} alt="Logo Figma" /><p>Figma</p> </div>
            <div id='vscodebooki'><img src={logoVscode} alt="Logo VSCode" /><p>VSCode</p> </div>
          </div>

          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'>
            <div className='lienbooki-container'>
            <a href="https://charleshuault.github.io/Booki/" target="_blank" rel="noopener noreferrer"><button id='lienbooki'>{t('bookimodal.link')}</button></a>
            <a href="https://github.com/CharlesHuault/Booki" target="_blank" rel="noopener noreferrer"><button id='liengithubbooki'>{t('bookimodal.link2')}</button></a> 
            </div>
      </div>
    </ReactModal>
  );
};

export default Modalbooki;