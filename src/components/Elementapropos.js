import React from 'react';
import Skillsblock from './Skillsblock';
import '../styles/components/elementapropos.scss'
import { useTranslation } from 'react-i18next';

const Elementapropos = () => {
    // Appel de i18n pour la traduction des textes du composant
    const { t } = useTranslation();

    // Définition des textes à utiliser dans les différents composants enfants "Skillsblock" 
    const formationsData = {
        title: t('about.education'),
        textList: [t('about.openclassrooms'), t('about.BAC')]
    }
    const informationsData = {
        title: t('about.infos'),
        textList: [t('about.town'), t('about.languages'), t('about.driving')]
    }
    const interetsData = {
        title: t('about.hobbies'),
        textList: [t('about.miniatures'), t('about.reading'), t('about.games')]
    }

    return(
        <div className='apropos-container'>
            <div className='elemapropos'>
                <Skillsblock {...formationsData} />
                <Skillsblock {...informationsData} />
                <Skillsblock {...interetsData}/>
            </div>
            <div id='contact'></div>
        </div>
    );
};

export default Elementapropos;