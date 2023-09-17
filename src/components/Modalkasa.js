import React from 'react';
import '../styles/components/modalkasa.scss'
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import montageKasa from '../assets/img/montagekasa2.png'
import reactKasa from '../assets/logos/LogoREACT.svg'
import sassKasa from '../assets/logos/LogoSASS.svg'
import npmKasa from '../assets/logos/LogoNPM.svg'
import kasaHome from '../assets/img/kasascreen.png'
import kasaLogement from '../assets/img/logementkasa.png'
import kasaAbout from '../assets/img/aproposkasa.png'

const Modalkasa = ({ isOpen, closeModal }) => {
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-kasa'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageKasa} alt="montage kasa" id='Montagekasa'/>
          <div className='kasa-text'>
            <h2>{t('kasamodal.title')}</h2>
            <p><strong className='addspace'>{t('kasamodal.year')}</strong>2023</p>
                    <p><strong>Mission:</strong><br />{t('kasamodal.text1')}<br />{t('kasamodal.text2')}<br />{t('kasamodal.text3')}<br />{t('kasamodal.text4')}</p>
            <h3>{t('kasamodal.tech')}</h3>
          <div className='tech-container'>
            <div id='reactkasa'><img src={reactKasa} alt="Logo ReactJs" /><p>ReactJs</p></div>
            <div id='sasskasa'><img src={sassKasa} alt="Logo Sass" /><p>Sass</p></div>
            <div id='npmkasa'><img src={npmKasa} alt="Logo npm" /><p>npm</p></div>            

            </div>
            <div className='lienkasa-container'>
              <a href="https://charleshuault-kasa.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='lienkasa'>{t('kasamodal.link')}</button></a>
              <a href="https://github.com/CharlesHuault/Kasa" target="_blank" rel="noopener noreferrer"><button className='lienkasa'>{t('kasamodal.link2')}</button></a>
            </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <h4>{t('kasamodal.img1')}</h4>
            <img src={kasaHome} alt="Screenshot Homepage Kasa" id='screenhomekasa' />
            <h4>{t('kasamodal.img2')}</h4>
            <img src={kasaLogement} alt="Screenshot Logement Kasa" id='screenlogkasa' />
            <h4>{t('kasamodal.img3')}</h4>
            <img src={kasaAbout} alt="Screenshot a propos Kasa" id='screenaboutkasa' />
      </div>
    </ReactModal>
    );
};

export default Modalkasa;