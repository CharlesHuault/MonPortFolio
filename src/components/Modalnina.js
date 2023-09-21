import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalnina.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import montageNina from '../assets/img/montagenina.png'
import lighthouseNina from '../assets/logos/LogoLIGHTHOUSE.svg'
import waveNina from '../assets/logos/LogoWAVE.svg'
import lighthouseOk from '../assets/img/lighthouseok.png'
import waveAvModif from '../assets/img/waveavmodif.png'
import waveApModif from '../assets/img/waveapmodif.png'

// Composant de la modale du projet "Nina Carducci"
const Modalnina = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-nina'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageNina} alt="montage nina" id='Montagenina'/>
          <div className='nina-text'>
            <h2>{t('ninamodal.title')}</h2>
            <p><strong className='addspace'>{t('ninamodal.year')}</strong>2023</p>
            <p><strong>Mission:</strong><br />{t('ninamodal.text1')}<br />{t('ninamodal.text2')}</p>
            <h3>{t('ninamodal.tech')}</h3>
          <div className='tech-container'>
            <div id='lighthousenina'><img src={lighthouseNina} alt="Logo Lighthouse" /><p>Lighthouse</p></div>
            <div id='wavenina'><img src={waveNina} alt="Logo Wave" /><p>Wave</p></div>
            </div>
                <div className='liennina-container'>
                    <a href="https://charleshuault.github.io/Nina-Carducci/" target="_blank" rel="noopener noreferrer"><button id='liensitenina'>{t('ninamodal.link1')}</button></a>
                    <a href="https://github.com/CharlesHuault/Nina-Carducci" target="_blank" rel="noopener noreferrer"><button id='liengithubnina'>{t('ninamodal.link2')}</button></a>                     
            </div>        
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'>         
            <h4>{t('ninamodal.img1')}</h4>
                <img src={lighthouseOk} alt="Screenshot lighthouse" id='screenlighthouse' />
                
                    <h4>{t('ninamodal.img2')}</h4>
                <div className='wave-container'>    
            <img src={waveAvModif} alt="Screenshot Wave avant optimisations" id='screenwaveav' />
            <img src={waveApModif} alt="Screenshot Wave avant optimisations" id='screenwaveap' />
                </div>
      </div>
    </ReactModal>
    );
};

export default Modalnina;