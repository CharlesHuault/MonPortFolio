import React from 'react';
import '../styles/components/modalkasa.scss'
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import maquetteKasa from '../assets/img/MaqDeskKasa.png'
import reactKasa from '../assets/logos/LogoREACT.svg'
import sassKasa from '../assets/logos/LogoSASS.svg'
import npmKasa from '../assets/logos/LogoNPM.svg'
import logoHTML from '../assets/logos/LogoHTML.svg'
import logoCSS from '../assets/logos/LogoCSS.svg'
import logoJS from '../assets/logos/LogoJS.svg'
import logoFigma from '../assets/logos/LogoFIGMA.svg'
import logoVscode from '../assets/logos/LogoVSCODE.svg'
import logoGithub from '../assets/logos/LogoGITHUB.svg'


// Composant de la modale du projet "Kasa"
const Modalkasa = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-kasa'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={maquetteKasa} alt="maquette kasa" id='Maquettekasa'/>
          <div className='kasa-text'>
            <h2>{t('kasamodal.title')}</h2>
            <p><strong className='addspace'>{t('kasamodal.year')}</strong>2023</p>
            <p><strong className='addspace'>Contexte:</strong><br />{t('kasamodal.text1')}<br />{t('kasamodal.text2')}</p>
            <p><strong className='addspace'>Réalisations:</strong><br />{t('kasamodal.text3')}<br />{t('kasamodal.text4')}<br />{t('kasamodal.text5')}<br />{t('kasamodal.text6')}<br />{t('kasamodal.text7')}<br /></p>
            <h3 className='addspace'>{t('kasamodal.tech')}</h3>
            <div className='tech-container'>
              <div id='htmlkasa' className='logo-tech-container'><img src={logoHTML} alt="Logo Html" /><p>HTML</p></div>
              <div id='reactkasa' className='logo-tech-container'><img src={reactKasa} alt="Logo ReactJs" /><p>ReactJs</p></div>
                          <div id='jskasa' className='logo-tech-container'><img src={logoJS} alt="Logo Js" /><p>Javascript</p></div>
              <div id='sasskasa' className='logo-tech-container'><img src={sassKasa} alt="Logo Sass" /><p>Sass</p></div>

            <div id='csskasa' className='logo-tech-container'><img src={logoCSS} alt="Logo Css" /><p>CSS</p></div>
              <div id='npmkasa' className='logo-tech-container'><img src={npmKasa} alt="Logo npm" /><p>npm</p></div>      
                        <div id='githubkasa' className='logo-tech-container'><img src={logoGithub} alt="Logo Github" /><p>GitHub</p> </div>
            <div id='figmakasa' className='logo-tech-container'><img src={logoFigma} alt="Logo Figma" /><p>Figma</p> </div>
            <div id='vscodekasa' className='logo-tech-container'><img src={logoVscode} alt="Logo VSCode" /><p>VSCode</p> </div>  

            </div>
            
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <div className='lienkasa-container'>
              <a href="https://charleshuault-kasa.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='lienkasa'>{t('kasamodal.link')}</button></a>
              <a href="https://github.com/CharlesHuault/Kasa" target="_blank" rel="noopener noreferrer"><button className='lienkasa'>{t('kasamodal.link2')}</button></a>
            </div>
      </div>
    </ReactModal>
    );
};

export default Modalkasa;