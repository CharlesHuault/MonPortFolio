import React from 'react';
import Skillsblock from './Skillsblock';
import '../styles/components/elementcompetences.scss'
import { useTranslation } from 'react-i18next';
import logoHTML from "../assets/logos/LogoHTML.svg"
import logoCSS from "../assets/logos/LogoCSS.svg"
import logoJS from "../assets/logos/LogoJS.svg"
import logoREACT from "../assets/logos/LogoREACT.svg"
import logoNODE from "../assets/logos/LogoNODE.svg"
import logoMONGODB from "../assets/logos/LogoMONGODB.svg"
import logoEXPRESS from "../assets/logos/LogoEXPRESS.svg"
import logoGITHUB from "../assets/logos/LogoGITHUB.svg"
import logoFIGMA from "../assets/logos/LogoFIGMA.svg"
import logoVSCODE from "../assets/logos/LogoVSCODE.svg"
import logoNPM from "../assets/logos/LogoNPM.svg"
import logoTRELLO from "../assets/logos/LogoTRELLO.svg"
import logoPOSTMAN from "../assets/logos/LogoPOSTMAN.svg"
import logoSWAGGER from "../assets/logos/LogoSWAGGER.svg"


const Elementcompetences = () => {
    const { t } = useTranslation();
    const frontendData = {
        title: 'FRONTEND',
        logos: <div className='logos'><img src={logoHTML} alt="Logo HTML" /><img src={logoCSS} alt="Logo CSS" /><img src={logoJS} alt="Logo Javascript" /><img src={logoREACT} alt="Logo ReactJS" /></div>,
        textList: ['HTML/CSS', 'JavaScript', 'ReactJS']
    }

    const backendData = {
        title: 'BACKEND',
        logos: <div className='logos'><img src={logoNODE} alt="Logo NodeJs" /><img src={logoMONGODB} alt="Logo MongoDB" /><img src={logoEXPRESS}  alt="Logo ExpressJS" /></div>,
        textList: ['NodeJs', 'MongoDB', 'ExpressJS']
    }

    const outilsData = {
        title: t('skillsblock.tools'),
        logos: <div className='logos'><img src={logoGITHUB} alt="Logo Github" /><img src={logoFIGMA} alt="Logo Figma" /><img src={logoVSCODE} alt="Logo VsCode" /><img src={logoNPM} alt="Logo npm" /><img src={logoTRELLO} alt="Logo Trello" /><img src={logoPOSTMAN} alt="Logo Postman" /><img src={logoSWAGGER} alt="Logo Swagger" id='logoswagger'/></div>,
        textList: ['GitHub/Figma', 'Visual Studio Code/npm', 'Trello/Postman/Swagger']
    }

    return (
        <div className='comp-container'>
            <div className='elemcompetences'>
                <Skillsblock {...frontendData} />
                <Skillsblock {...backendData} />
                <Skillsblock {...outilsData} />
            </div>
            <div className='ancre-projets'id='projets'></div>
        </div>
    );
};

export default Elementcompetences;