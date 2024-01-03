import React from 'react';
import '../styles/components/modalgrim.scss'
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import maquetteGrim from '../assets/img/MaqDeskGrim.png'
import nodeGrim from '../assets/logos/LogoNODE.svg'
import npmGrim from '../assets/logos/LogoNPM.svg'
import expressGrim from '../assets/logos/LogoEXPRESS.svg'
import mongodbGrim from '../assets/logos/LogoMONGODB.svg'
import logoVscode from '../assets/logos/LogoVSCODE.svg'
import logoGithub from '../assets/logos/LogoGITHUB.svg'
import logoJS from '../assets/logos/LogoJS.svg'

// Composant de la modale du projet "MonVieuxGrimoire"
const Modalgrim = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-grim'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={maquetteGrim} alt="maquette MonVieuxGrimoire" id='Maquettegrim'/>
          <div className='grim-text'>
            <h2>{t('grimmodal.title')}</h2>
            <p><strong className='addspace'>{t('grimmodal.year')}</strong>2023</p>
            <p><strong className='addspace'>Contexte:</strong><br />{t('grimmodal.text1')}<br />{t('grimmodal.text2')}<br /></p>
            <p><strong className='addspace'>Réalisations:</strong><br />{t('grimmodal.text3')}<br />{t('grimmodal.text4')}<br />{t('grimmodal.text5')}<br />{t('grimmodal.text6')}<br />{t('grimmodal.text7')}</p>
            <h3 className='addspace'>{t('grimmodal.tech')}</h3>
            <div className='tech-container'>
                                        <div id='jsgrim' className='logo-tech-container'><img src={logoJS} alt="Logo Js" /><p>Javascript</p></div>
                <div id='nodegrim' className='logo-tech-container'><img src={nodeGrim} alt="Logo NodeJs" /><p>NodeJs</p></div>
                <div id='npmgrim' className='logo-tech-container'><img src={npmGrim} alt="Logo npm" /><p>npm</p></div>
                <div id='expressgrim' className='logo-tech-container'><img src={expressGrim} alt="Logo Express" /><p>ExpressJs</p></div>
              <div id='mongodbgrim' className='logo-tech-container'><img src={mongodbGrim} alt="Logo Mongodb" /><p>MongoDB</p></div>
                                      <div id='githubkasa' className='logo-tech-container'><img src={logoGithub} alt="Logo Github" /><p>GitHub</p> </div>
                          <div id='vscodekasa' className='logo-tech-container'><img src={logoVscode} alt="Logo VSCode" /><p>VSCode</p> </div> 
            </div>
            
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <div className='liengrim-container'>
              <a href="https://github.com/CharlesHuault/MonVieuxGrimoire" target="_blank" rel="noopener noreferrer"><button id='liengrim'>{t('grimmodal.link')}</button></a>
            </div>
      </div>
    </ReactModal>
    );
};

export default Modalgrim;