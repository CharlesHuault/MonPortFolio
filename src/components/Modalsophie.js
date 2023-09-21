import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalsophie.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import montageSophie from '../assets/img/montagepaintsophie.png'
import htmlSophie from '../assets/logos/LogoHTML.svg'
import cssSophie from '../assets/logos/LogoCSS.svg'
import jsSophie from '../assets/logos/LogoJS.svg'
import nodeSophie from '../assets/logos/LogoNODE.svg'
import npmSophie from '../assets/logos/LogoNPM.svg'
import swaggerSophie from '../assets/logos/LogoSWAGGER.svg'
import maqHomeSophie from '../assets/img/Maquette-homepage-sophie.png'
import maqLogSophie from '../assets/img/Maquette-login-sophie.png'
import maqModal1 from '../assets/img/Maquette-modale-1-sophie.png'
import maqModal2 from '../assets/img/Maquette-modale-2-sophie.png'

// Composant de la modale du projet "Sophie Bluel"
const Modalsophie = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-sophie'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageSophie} alt="montage sophie" id='Montagesophie'/>
          <div className='sophie-text'>
            <h2>{t('sophiemodal.title')}</h2>
            <p><strong className='addspace'>{t('sophiemodal.year')}</strong>2023</p>
                    <p><strong>Mission:</strong><br />{t('sophiemodal.text1')}<br />{t('sophiemodal.text2')}<br />{t('sophiemodal.text3')}<br /></p>
                        <ul>
                            <li>{t('sophiemodal.text4')}</li>
                            <li>{t('sophiemodal.text5')}</li>
                            <li>{t('sophiemodal.text6')}</li>
                        </ul>
            <h3>{t('sophiemodal.tech')}</h3>
          <div className='tech-container'>
            <div id='htmlsophie'><img src={htmlSophie} alt="Logo Html" /><p>HTML</p></div>
            <div id='csssophie'><img src={cssSophie} alt="Logo Css" /><p>CSS</p></div>
            <div id='jssophie'><img src={jsSophie} alt="Logo JS" /><p>Javascript</p></div>   
            <div id='nodesophie'><img src={nodeSophie} alt="Logo Node" /><p>NodeJS</p></div>
            <div id='npmsophie'><img src={npmSophie} alt="Logo npm" /><p>npm</p></div>            
            <div id='swaggersophie'><img src={swaggerSophie} alt="Logo Swagger" /><p>Swagger</p></div>
            </div>
            <div className='liensophie-container'>
              <a href="https://github.com/CharlesHuault/Architecte-Sophie-Bluel" target="_blank" rel="noopener noreferrer"><button id='liensophie'>{t('sophiemodal.link1')}</button></a>
            </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'> 
          <div className='sophie-homepage-container'>
            <h4>{t('sophiemodal.img1')}</h4>
            <img src={maqHomeSophie} alt="Maquette homepage sophie" id='sophiehomepage' />
          </div>
            <div className='sophie-login-modal-container'>
                <div className='sophie-login-container'>
                    <h4>{t('sophiemodal.img2')}</h4>
                    <img src={maqLogSophie} alt="Maquette Login Sophie" />
                    </div>
                    <div className='sophie-modal-container'>
                        <h4>{t('sophiemodal.img3')}</h4>
                        <img src={maqModal1} alt="Maquette modale 1" />
                        <img src={maqModal2} alt="Maquette modale 2" />
                    </div>
        </div>
      </div>
    </ReactModal>
    );
};

export default Modalsophie;