import React from 'react';
import '../styles/components/mailreseaux.scss'
import { useTranslation } from 'react-i18next';
import logoGMAIL from '../assets/logos/LogoGMAIL.svg'
import logoLINKDIN from '../assets/logos/LogoLINKDIN.svg'
import logoGITHUBGD from '../assets/logos/LogoGITHUBGD.svg'

const Mailreseaux = () => {
    // Appel de i18n pour la traduction des textes du composant
    const { t } = useTranslation();
    
    return (
        <div className='mailres-container'>
                <div className='maillogo'>
                    <h4>EMAIL</h4>
                    <a href="mailto:chuault@gmail.com">
                        <img src={logoGMAIL} alt="Logo Gmail" />
                    </a>
                </div>
                <div className='reslogo'>
                <h4>{t('social.medias')}</h4>
                    <a href="https://www.linkedin.com/in/charles-huault-a8b987268" target="_blank" rel="noopener noreferrer">
                    <img src={logoLINKDIN} alt="Logo LinkdIn" />
                </a>
                <a href="https://github.com/CharlesHuault" target="_blank" rel="noopener noreferrer">
                    <img src={logoGITHUBGD} alt="Logo Github" />
                </a>
            </div>
        </div>        
    );
};

export default Mailreseaux;