import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalqwenta.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import maquetteQwenta from '../assets/img/MaqDeskMenu.png'
import trelloQwenta from '../assets/logos/LogoTRELLO.svg'
import wakeletQwenta from '../assets/logos/LogoWAKELET.svg'
import figmaQwenta from '../assets/logos/LogoFIGMA.svg'

// Composant de la modale du projet "MenuMaker by Qwenta"
const Modalqwenta = ({ isOpen, closeModal }) => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation() ;
    return (
     <ReactModal id='modal-qwenta'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={maquetteQwenta} alt="Maquette Qwenta" id='Maquetteqwenta'/>
          <div className='qwenta-text'>
            <h2>{t('qwentamodal.title')}</h2>
            <p><strong className='addspace'>{t('qwentamodal.year')}</strong>2023</p>
            <p><strong className='addspace'>Contexte:</strong><br />{t('qwentamodal.text1')}<br />{t('qwentamodal.text2')}<br /></p>
            <p><strong className='addspace'>Réalisations:</strong><br />{t('qwentamodal.text3')}<br />{t('qwentamodal.text4')}<br />{t('qwentamodal.text5')}<br />{t('qwentamodal.text6')}<br />{t('qwentamodal.text7')}</p>
            <h3 className='addspace'>{t('qwentamodal.tech')}</h3>
          <div className='tech-container'>
            <div id='trellomenu'><img src={trelloQwenta} alt="Logo Trello" /><p>Trello</p></div>
            <div id='figmamenu'><img src={figmaQwenta} alt="Logo Figma" /><p>Figma</p></div>
            <div id='wakeletmenu'><img src={wakeletQwenta} alt="Logo Wakelet" /><p>Wakelet</p></div>
          </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>

    </ReactModal>
    );
};

export default Modalqwenta;