import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalsophie.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import maquetteSophie from '../assets/img/MaqDeskSophie.png'
import htmlSophie from '../assets/logos/LogoHTML.svg'
import cssSophie from '../assets/logos/LogoCSS.svg'
import jsSophie from '../assets/logos/LogoJS.svg'
import nodeSophie from '../assets/logos/LogoNODE.svg'
import npmSophie from '../assets/logos/LogoNPM.svg'
import swaggerSophie from '../assets/logos/LogoSWAGGER.svg'
import logoGithub from '../assets/logos/LogoGITHUB.svg'
import logoFigma from '../assets/logos/LogoFIGMA.svg'
import logoVscode from '../assets/logos/LogoVSCODE.svg'


// Composant de la modale du projet "Sophie Bluel"
const Modalsophie = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-sophie'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={maquetteSophie} alt="maquette sophie" id='Maquettesophie'/>
          <div className='sophie-text'>
            <h2>{t('sophiemodal.title')}</h2>
            <p><strong className='addspace'>{t('sophiemodal.year')}</strong>2023</p>
            <p><strong className='addspace'>Contexte:</strong><br />{t('sophiemodal.text1')}<br />{t('sophiemodal.text2')}<br /></p>
            <p><strong className='addspace'>Réalisations:</strong><br />{t('sophiemodal.text3')}<br />{t('sophiemodal.text4')}<br />{t('sophiemodal.text5')}<br />{t('sophiemodal.text6')}<br />{t('sophiemodal.text7')}<br />{t('sophiemodal.text8')}
                        </p>
            <h3 className='addspace'>{t('sophiemodal.tech')}</h3>
          <div className='tech-container'>
            <div id='htmlsophie' className='logo-tech-container'><img src={htmlSophie} alt="Logo Html" /><p>HTML</p></div>
            <div id='csssophie' className='logo-tech-container'><img src={cssSophie} alt="Logo Css" /><p>CSS</p></div>
            <div id='jssophie' className='logo-tech-container'><img src={jsSophie} alt="Logo JS" /><p>Javascript</p></div>   
            <div id='nodesophie' className='logo-tech-container'><img src={nodeSophie} alt="Logo Node" /><p>NodeJS</p></div>
            <div id='npmsophie' className='logo-tech-container'><img src={npmSophie} alt="Logo npm" /><p>npm</p></div>            
              <div id='swaggersophie' className='logo-tech-container'><img src={swaggerSophie} alt="Logo Swagger" /><p>Swagger</p></div>
                          <div id='githubsophie' className='logo-tech-container'><img src={logoGithub} alt="Logo Github" /><p>GitHub</p> </div>
            <div id='figmasophie' className='logo-tech-container'><img src={logoFigma} alt="Logo Figma" /><p>Figma</p> </div>
            <div id='vscodesophie' className='logo-tech-container'><img src={logoVscode} alt="Logo VSCode" /><p>VSCode</p> </div>
            </div>
            
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'> 
          <div className='liensophie-container'>
              <a href="https://github.com/CharlesHuault/Architecte-Sophie-Bluel" target="_blank" rel="noopener noreferrer"><button id='liensophie'>{t('sophiemodal.link1')}</button></a>
            </div>
      </div>
    </ReactModal>
    );
};

export default Modalsophie;