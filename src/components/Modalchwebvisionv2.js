import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalchwebvisionv2.scss'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import screenCHWebvisionv2 from '../assets/img/screenchwebvisionv2complet.png'
import logoWordpress from '../assets/logos/Logowordpress.svg'
import logoElem from '../assets/logos/Logoelementor.svg'
import logoAstra from '../assets/logos/Logoastra.svg'
import logoSpectra from '../assets/logos/Logospectra.svg'
import logoWpmail from '../assets/logos/Logowpmail.png'
import logoWpforms from '../assets/logos/Logowpforms.png'

const Modalchwebvision = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-chw'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <div className='Screenchw-container'><img src={screenCHWebvisionv2} alt="CH-WebVision" id='Screenchw'/></div>
          <div className='chw-text'>
            <h2>{t('chwmodalv2.title')}</h2>
            <p><strong className='addspace'>{t('chwmodalv2.year')}</strong>2023</p>
            <p><strong className='addspace'>Contexte:</strong><br />{t('chwmodalv2.text1')}<br />{t('chwmodalv2.text2')}</p>
            <p><strong className='addspace'>Réalisations:</strong><br />{t('chwmodalv2.text3')}<br />{t('chwmodalv2.text4')}<br />{t('chwmodalv2.text5')}<br /></p>
            <h3 className='addspace'>{t('chwmodalv2.tech')}</h3>
            <div className='tech-container'>
              <div id='wordpresschw' className='logo-tech-container'><img src={logoWordpress} alt="Logo Wordpress" /><p>Wordpress</p></div>
              <div id='elemchw' className='logo-tech-container'><img src={logoElem} alt="Logo Elementor" /><p>Elementor</p></div>
              <div id='spectrachw' className='logo-tech-container'><img src={logoSpectra} alt="Logo Spectra" /><p>Spectra</p></div>
              <div id='astrachw' className='logo-tech-container'><img src={logoAstra} alt="Logo Astra" /><p>Astra</p></div>
              <div id='wpmailchw' className='logo-tech-container'><img src={logoWpmail} alt="Logo WpMail" /><p>WpMail</p></div>      
              <div id='wpformschw' className='logo-tech-container'><img src={logoWpforms} alt="Logo WpForms" /><p>WpForms</p> </div>


            </div>
            
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <div className='lienchw-container'>
              <a href="https://www.ch-webvision.fr/" target="_blank" rel="noopener noreferrer"><button className='lienchw'>{t('chwmodalv2.link')}</button></a>
            </div>
      </div>
    </ReactModal>
    );
};

export default Modalchwebvision;