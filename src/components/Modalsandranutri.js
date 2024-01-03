import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalsandranutri.scss'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logoHTML from '../assets/logos/LogoHTML.svg'
import logoCSS from '../assets/logos/LogoCSS.svg'
import logoReact from '../assets/logos/LogoREACT.svg'
import logoSass from '../assets/logos/LogoSASS.svg'
import logoJS from '../assets/logos/LogoJS.svg'
import screenSandra from '../assets/img/screensandranutri.png'
import logoGithub from '../assets/logos/LogoGITHUB.svg'
import logoFigma from '../assets/logos/LogoFIGMA.svg'
import logoVscode from '../assets/logos/LogoVSCODE.svg'
import logoNpm from '../assets/logos/LogoNPM.svg'

const Modalchwebvision = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-sand'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <div className='Screensand-container'><img src={screenSandra} alt="Sandra Coach Nutritionniste" id='Screensand'/></div>
          <div className='sand-text'>
            <h2>{t('sandmodal.title')}</h2>
            <p><strong className='addspace'>{t('sandmodal.year')}</strong>2023</p>
            <p><strong className='addspace'>Contexte:</strong><br />{t('sandmodal.text1')}<br />{t('sandmodal.text2')}</p>
            <p><strong className='addspace'>Réalisations:</strong><br />{t('sandmodal.text3')}<br />{t('sandmodal.text4')}<br />{t('sandmodal.text5')}<br />{t('sandmodal.text6')}<br />{t('sandmodal.text7')}<br />{t('sandmodal.text8')}<br />{t('sandmodal.text9')}</p>
            <h3 className='addspace'>{t('sandmodal.tech')}</h3>
            <div className='tech-container'>
              <div id='htmlsand' className='logo-tech-container'><img src={logoHTML} alt="Logo Html" /><p>HTML</p></div>
              <div id='reactsand' className='logo-tech-container'><img src={logoReact} alt="Logo ReactJs" /><p>ReactJs</p></div>
                          <div id='jssand' className='logo-tech-container'><img src={logoJS} alt="Logo Js" /><p>Javascript</p></div>
              <div id='sasssand' className='logo-tech-container'><img src={logoSass} alt="Logo Sass" /><p>Sass</p></div>

            <div id='csssand' className='logo-tech-container'><img src={logoCSS} alt="Logo Css" /><p>CSS</p></div>
              <div id='npmsand' className='logo-tech-container'><img src={logoNpm} alt="Logo npm" /><p>npm</p></div>      
                        <div id='githubsand' className='logo-tech-container'><img src={logoGithub} alt="Logo Github" /><p>GitHub</p> </div>
            <div id='figmasand' className='logo-tech-container'><img src={logoFigma} alt="Logo Figma" /><p>Figma</p> </div>
            <div id='vscodesand' className='logo-tech-container'><img src={logoVscode} alt="Logo VSCode" /><p>VSCode</p> </div>  

            </div>
            
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <div className='liensand-container'>
              <a href="https://http://www.sandralagouarde.com/" target="_blank" rel="noopener noreferrer"><button className='liensand'>{t('sandmodal.link')}</button></a>
              <a href="https://github.com/CharlesHuault/Sandra-nutricoach" target="_blank" rel="noopener noreferrer"><button className='liensand'>{t('sandmodal.link2')}</button></a>
            </div>
      </div>
    </ReactModal>
    );
};

export default Modalchwebvision;