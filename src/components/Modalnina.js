import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalnina.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import maquetteNina from '../assets/img/MaqDeskNina.png'
import lighthouseNina from '../assets/logos/LogoLIGHTHOUSE.svg'
import waveNina from '../assets/logos/LogoWAVE.svg'
import logoVscode from '../assets/logos/LogoVSCODE.svg'
import logoChrome from '../assets/logos/LogoCHROME.svg'
import logoHTML from '../assets/logos/LogoHTML.svg'
import logoCSS from '../assets/logos/LogoCSS.svg'
import logoJS from '../assets/logos/LogoJS.svg'
import logoGithub from '../assets/logos/LogoGITHUB.svg'

// Composant de la modale du projet "Nina Carducci"
const Modalnina = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-nina'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={maquetteNina} alt="Maquette nina" id='Maquettenina'/>
          <div className='nina-text'>
            <h2>{t('ninamodal.title')}</h2>
            <p><strong className='addspace'>{t('ninamodal.year')}</strong>2023</p>
            <p><strong className='addspace'>Contexte:</strong><br />{t('ninamodal.text1')}<br />{t('ninamodal.text2')}</p>
            <p><strong className='addspace'>Réalisations:</strong><br />{t('ninamodal.text3')}<br />{t('ninamodal.text4')}<br />{t('ninamodal.text5')}</p>
            <h3 className='addspace'>{t('ninamodal.tech')}</h3>
            <div className='tech-container'>
                          <div id='htmlnina' className='logo-tech-container'><img src={logoHTML} alt="Logo Html" /><p>HTML</p></div>
              <div id='cssnina' className='logo-tech-container'><img src={logoCSS} alt="Logo Css" /><p>CSS</p></div>
                          <div id='jsnina' className='logo-tech-container'><img src={logoJS} alt="Logo Javascript" /><p>Javascript</p></div>
            <div id='lighthousenina' className='logo-tech-container'><img src={lighthouseNina} alt="Logo Lighthouse" /><p>Lighthouse</p></div>
              <div id='wavenina' className='logo-tech-container'><img src={waveNina} alt="Logo Wave" /><p>Wave</p></div>
              <div id='vscodenina' className='logo-tech-container'><img src={logoVscode} alt="Logo VSCode" /><p>VSCode</p> </div>
              <div id='chromenina' className='logo-tech-container'><img src={logoChrome} alt="Logo Chrome" /><p>Chrome Dev Tools</p> </div>
                          <div id='githubnina' className='logo-tech-container'><img src={logoGithub} alt="Logo Github" /><p>GitHub</p> </div>
            </div>
                
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>
          <div className='liennina-container'>
                    <a href="https://charleshuault.github.io/Nina-Carducci/" target="_blank" rel="noopener noreferrer"><button id='liensitenina'>{t('ninamodal.link1')}</button></a>
                    <a href="https://github.com/CharlesHuault/Nina-Carducci" target="_blank" rel="noopener noreferrer"><button id='liengithubnina'>{t('ninamodal.link2')}</button></a>                     
            </div>                 
      </div>
    </ReactModal>
    );
};

export default Modalnina;