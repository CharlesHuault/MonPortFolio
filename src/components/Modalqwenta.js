import React from 'react';
import ReactModal from 'react-modal';
import '../styles/components/modalqwenta.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import montageQwenta from '../assets/img/montageqwenta.png'
import trelloQwenta from '../assets/logos/LogoTRELLO.svg'
import wakeletQwenta from '../assets/logos/LogoWAKELET.svg'
import figmaQwenta from '../assets/logos/LogoFIGMA.svg'
import screenTrello from '../assets/img/screentrello.png'
import screenWakelet from '../assets/img/screenwakelet.png'
import screenSpeTech from '../assets/img/screenspetechniques.png'

const Modalqwenta = ({ isOpen, closeModal }) => {
  const { t } = useTranslation() ;
    return (
     <ReactModal id='modal-qwenta'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageQwenta} alt="montage qwenta" id='Montageqwenta'/>
          <div className='qwenta-text'>
            <h2>{t('qwentamodal.title')}</h2>
            <p><strong className='addspace'>{t('qwentamodal.year')}</strong>2023</p>
            <p><strong>Mission:</strong><br />{t('qwentamodal.text1')}<br />{t('qwentamodal.text2')}<br />{t('qwentamodal.text3')}</p>
            <h3>{t('qwentamodal.tech')}</h3>
          <div className='tech-container'>
            <div id='trellomenu'><img src={trelloQwenta} alt="Logo Trello" /><p>Trello</p></div>
            <div id='figmamenu'><img src={figmaQwenta} alt="Logo Figma" /><p>Figma</p></div>
            <div id='wakeletmenu'><img src={wakeletQwenta} alt="Logo Wakelet" /><p>Wakelet</p></div>
          </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
      <div className='modal-body'>         
            <h4>{t('qwentamodal.img1')}</h4>
            <img src={screenTrello} alt="Screenshot Trello" id='screentrello' />
            <h4>{t('qwentamodal.img2')}</h4>
            <img src={screenWakelet} alt="Screenshot Wakelet" id='screenwakelet' />
            <h4>{t('qwentamodal.img3')}</h4>
            <img src={screenSpeTech} alt="Screenshot spécifications" id='screenspetechniques' />
      </div>
    </ReactModal>
    );
};

export default Modalqwenta;