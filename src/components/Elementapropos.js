import React from 'react';
import Skillsblock from './Skillsblock';
import '../styles/components/elementapropos.scss'
import { useTranslation } from 'react-i18next';

const Elementapropos = () => {
    const { t } = useTranslation();
    const formationsData = {
        title: t('about.education'),
        textList: ['Développeur Intégrateur Web (BAC +2, OpenClassrooms, 2023)', 'BAC Général S (2007)']
    }

    const informationsData = {
        title: 'INFORMATIONS COMPLEMENTAIRES',
        textList: ['Ville: Artigues-près-Bordeaux', 'Langues: Français(Maternelle), Anglais(Courant)', 'Permis A et B']
    }

    const interetsData = {
        title: "CENTRES D'INTERETS",
        textList: ['Modélisme', 'Lecture', 'Jeux Vidéos']
    }

    return (
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