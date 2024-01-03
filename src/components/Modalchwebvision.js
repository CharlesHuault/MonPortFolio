import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalchwebvision.scss'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logoHTML from '../assets/logos/LogoHTML.svg'
import logoCSS from '../assets/logos/LogoCSS.svg'
import logoReact from '../assets/logos/LogoREACT.svg'
import logoSass from '../assets/logos/LogoSASS.svg'
import logoJS from '../assets/logos/LogoJS.svg'
import screenCHWebvision from '../assets/img/screenchwebvision.png'
import logoGithub from '../assets/logos/LogoGITHUB.svg'
import logoFigma from '../assets/logos/LogoFIGMA.svg'
import logoVscode from '../assets/logos/LogoVSCODE.svg'
import logoNpm from '../assets/logos/LogoNPM.svg'

const Modalchwebvision = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-chw'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <div className='Screenchw-container'><img src={screenCHWebvision} alt="CH-WebVision" id='Screenchw'/></div>
          <div className='chw-text'>
            <h2>{t('chwmodal.title')}</h2>
            <p><strong className='addspace'>{t('chwmodal.year')}</strong>2023</p>
            <p><strong className='addspace'>Contexte:</strong><br />{t('chwmodal.text1')}<br />{t('chwmodal.text2')}</p>
            <p><strong className='addspace'>Réalisations:</strong><br />{t('chwmodal.text3')}<br />{t('chwmodal.text4')}<br />{t('chwmodal.text5')}<br />{t('chwmodal.text6')}<br />{t('chwmodal.text7')}<br /></p>
            <h3 className='addspace'>{t('chwmodal.tech')}</h3>
            <div className='tech-container'>
              <div id='htmlchw' className='logo-tech-container'><img src={logoHTML} alt="Logo Html" /><p>HTML</p></div>
              <div id='reactchw' className='logo-tech-container'><img src={logoReact} alt="Logo ReactJs" /><p>ReactJs</p></div>
                          <div id='jschw' className='logo-tech-container'><img src={logoJS} alt="Logo Js" /><p>Javascript</p></div>
              <div id='sasschw' className='logo-tech-container'><img src={logoSass} alt="Logo Sass" /><p>Sass</p></div>

            <div id='csschw' className='logo-tech-container'><img src={logoCSS} alt="Logo Css" /><p>CSS</p></div>
              <div id='npmchw' className='logo-tech-container'><img src={logoNpm} alt="Logo npm" /><p>npm</p></div>      
                        <div id='githubchw' className='logo-tech-container'><img src={logoGithub} alt="Logo Github" /><p>GitHub</p> </div>
            <div id='figmachw' className='logo-tech-container'><img src={logoFigma} alt="Logo Figma" /><p>Figma</p> </div>
            <div id='vscodechw' className='logo-tech-container'><img src={logoVscode} alt="Logo VSCode" /><p>VSCode</p> </div>  

            </div>
            
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <div className='lienchw-container'>
              <a href="https://charleshuault-kasa.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='lienchw'>{t('chwmodal.link')}</button></a>
              <a href="https://github.com/CharlesHuault/Kasa" target="_blank" rel="noopener noreferrer"><button className='lienchw'>{t('chwmodal.link2')}</button></a>
            </div>
      </div>
    </ReactModal>
    );
};

export default Modalchwebvision;