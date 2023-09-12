import React from 'react';
import '../styles/components/modalgrim.scss'
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import montageGrim from '../assets/img/montagegrim.png'
import nodeGrim from '../assets/logos/LogoNODE.svg'
import npmGrim from '../assets/logos/LogoNPM.svg'
import expressGrim from '../assets/logos/LogoEXPRESS.svg'
import mongodbGrim from '../assets/logos/LogoMONGODB.svg'
import grimHome from '../assets/img/grimhomepage.png'
import grimLivre from '../assets/img/grimpagelivre.png'
import grimAjout from '../assets/img/grimpageajout.png'
import grimLogin from '../assets/img/grimpagelogin.png'

const Modalgrim = ({ isOpen, closeModal }) => {
  const { t } = useTranslation();
    return (
        <ReactModal id='modal-grim'isOpen={isOpen} onRequestClose={closeModal}>
        <div className='modal-header'>
        <img src={montageGrim} alt="montage MonVieuxGrimoire" id='Montagegrim'/>
          <div className='grim-text'>
            <h2>{t('grimmodal.title')}</h2>
            <p><strong>{t('grimmodal.year')}</strong>2023</p>
                    <p><strong>Mission:</strong><br />{t('grimmodal.text1')}<br />{t('grimmodal.text2')}<br />{t('grimmodal.text3')}<br />{t('grimmodal.text4')}</p>
            <h3>{t('grimmodal.tech')}</h3>
            <div className='tech-container'>
                <div id='nodegrim'><img src={nodeGrim} alt="Logo NodeJs" /><p>NodeJs</p></div>
                <div id='npmgrim'><img src={npmGrim} alt="Logo npm" /><p>npm</p></div>
                <div id='expressgrim'><img src={expressGrim} alt="Logo Express" /><p>ExpressJs</p></div>
                <div id='mongodbgrim'><img src={mongodbGrim} alt="Logo Mongodb" /><p>MongoDB</p></div>
            </div>
            <div className='liengrim-container'>
              <a href="https://github.com/CharlesHuault/MonVieuxGrimoire" target="_blank" rel="noopener noreferrer"><button id='liengrim'>{t('grimmodal.link')}</button></a>
            </div>
          </div>
            <button onClick={closeModal}><FontAwesomeIcon icon={faTimes} id='close-icon' /></button>
        </div>
        <div className='modal-body'>         
            <h4>{t('grimmodal.img1')}</h4>
            <img src={grimHome} alt="Screenshot Homepage MonVieuxGrimoire" id='screenhomegrim' />
            <h4>{t('grimmodal.img2')}</h4>
            <img src={grimLivre} alt="Screenshot Page Livre MonVieuxGrimoire" id='screenbookgrim' />
            <h4>{t('grimmodal.img3')}</h4>
            <img src={grimAjout} alt="Screenshot Page Ajout MonVieuxGrimoire " id='screenajoutgrim' />
            <h4>{t('grimmodal.img4')}</h4>
            <img src={grimLogin} alt="Screenshot Page Login MonVieuxGrimoire " id='screenlogingrim' />
      </div>
    </ReactModal>
    );
};

export default Modalgrim;