import React from 'react';
import Linkbutton from './Linkbutton';
import { useTranslation } from 'react-i18next';
import '../styles/components/mainlinks.scss'
import cv from '../assets/CharlesHuaultCV.pdf'

// Composant des principaux liens de la page affichés en accueil
const Mainlinks = () => {
    // Appel de i18n pour la traduction des textes du composant
    const { t } = useTranslation();
    return (
        <div className='mainlinks'>
            <Linkbutton title='Contact' anchor="contact"/>
            <Linkbutton title={t('mainlinks.cv')} url={cv}  type="application/pdf"/>
            <Linkbutton title='GitHub' hasLogo={true} url="https://github.com/CharlesHuault" rel="noopener noreferrer"/>
        </div>
    );
};

export default Mainlinks;