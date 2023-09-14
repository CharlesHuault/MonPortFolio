import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalbooki.scss'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import montageBooki from '../assets/img/bookimontageessai2.png'
import logoHTML from '../assets/logos/LogoHTML.svg'
import logoCSS from '../assets/logos/LogoCSS.svg'
import maqDeskBooki from '../assets/img/MaqDeskBooki.png'
import maqTabBooki from '../assets/img/Tablettebooki.png'
import maqMobBooki from '../assets/img/Mobilebooki.png'

const Modalbooki = ({ isOpen, closeModal }) => {
  const { t } = useTranslation();
  return (
    <ReactModal id='modal-booki'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageBooki} alt="montage booki" id='Montagebooki'/>
          <div className='booki-text'>
            <h2>{t('bookimodal.title')}</h2>
            <p><strong>{t('bookimodal.year')}</strong>2023</p>
            <p><strong>Mission:</strong><br />{t('bookimodal.text1')}<br />{t('bookimodal.text2')}</p>
            <h3>{t('bookimodal.tech')}</h3>
          <div className='tech-container'>
            <div id='htmlbooki'><img src={logoHTML} alt="Logo Html" /><p>HTML</p></div>
            <div id='cssbooki'><img src={logoCSS} alt="Logo Css" /><p>CSS</p></div>
          </div>
            <div className='lienbooki-container'>
            <a href="https://charleshuault.github.io/Booki/" target="_blank" rel="noopener noreferrer"><button id='lienbooki'>{t('bookimodal.link')}</button></a>
            <a href="https://github.com/CharlesHuault/Booki" target="_blank" rel="noopener noreferrer"><button id='liengithubbooki'>{t('bookimodal.link2')}</button></a> 
            </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'>
        <div className='booki-desktop-tablette-container'>
          <div className='booki-desktop-container'>
            <h4>{t('bookimodal.img1')}</h4>
            <img src={maqDeskBooki} alt="Maquette desktop booki" id='bookidesktop' />
          </div>
          <div className='booki-tablette-container'>
            <h4>{t('bookimodal.img2')}</h4>
            <img src={maqTabBooki} alt="Maquette tablette booki" />
          </div>
        </div>
        <div className='booki-mobile-container'>
          <h4>{t('bookimodal.img3')}</h4>
          <img src={maqMobBooki} alt="Maquette mobile booki" />
        </div>
      </div>
    </ReactModal>
  );
};

export default Modalbooki;