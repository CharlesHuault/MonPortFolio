import React from 'react';
import Skillsblock from './Skillsblock';
import '../styles/components/elementcompetences.scss'

const Elementcompetences = () => {
    const frontendData = {
        title: 'FRONTEND',
        logos: <div className='logos'><img src="./LogoHTML.svg" alt="Logo HTML" /><img src="./LogoCSS.svg" alt="Logo CSS" /><img src="./LogoJS.svg" alt="Logo Javascript" /><img src="./LogoREACT.svg" alt="Logo ReactJS" /></div>,
        textList: ['HTML/CSS', 'JavaScript', 'ReactJS']
    }

    const backendData = {
        title: 'BACKEND',
        logos: <div className='logos'><img src="./LogoNODE.svg" alt="Logo NodeJs" /><img src="./LogoMONGODB.svg" alt="Logo MongoDB" /><img src="./LogoEXPRESS.svg" alt="Logo ExpressJS" /></div>,
        textList: ['NodeJs', 'MongoDB', 'ExpressJS']
    }

    const outilsData = {
        title: 'OUTILS',
        logos: <div className='logos'><img src="./LogoGITHUB.svg" alt="Logo Github" /><img src="./LogoFIGMA.svg" alt="Logo Figma" /><img src="./LogoVSCODE.svg" alt="Logo VsCode" /><img src="./LogoNPM.svg" alt="Logo npm" /><img src="./LogoTRELLO.svg" alt="Logo Trello" /><img src="./LogoPOSTMAN.svg" alt="Logo Postman" /></div>,
        textList: ['GitHub/Figma', 'Visual Studio Code/npm', 'Trello/Postman']
    }

    return (
        <div className='elemcompetences'>
            <Skillsblock {...frontendData} />
            <Skillsblock {...backendData} />
            <Skillsblock {...outilsData} />
        </div>
    );
};

export default Elementcompetences;