import React from 'react';
import Skillsblock from './Skillsblock';
import '../styles/components/elementapropos.scss'

const Elementapropos = () => {
    const formationsData = {
        title: 'FORMATIONS',
        textList: ['Développeur Intégrateur Web (BAC +2, OpenClassrooms, 2023)', 'BAC Général S (2007)']
    }

    const informationsData = {
        title: 'INFORMATIONS COMPLEMENTAIRES',
        textList: ['Ville: Artigues-près-Bordeaux', 'Langues: Français(Maternelle), Anglais(Courant)', 'Permis B']
    }

    const interetsData = {
        title: "CENTRES D'INTERETS",
        textList: ['Modélisme', 'Lecture', 'Jeux Vidéos']
    }

    return (
        <div className='elemapropos'>
            <Skillsblock {...formationsData} />
            <Skillsblock {...informationsData} />
            <Skillsblock {...interetsData}/>
        </div>
    );
};

export default Elementapropos;