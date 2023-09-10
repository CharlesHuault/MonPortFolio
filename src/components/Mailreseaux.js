import React from 'react';
import '../styles/components/mailreseaux.scss'
import logoGMAIL from '../assets/logos/LogoGMAIL.svg'
import logoLINKDIN from '../assets/logos/LogoLINKDIN.svg'
import logoGITHUBGD from '../assets/logos/LogoGITHUBGD.svg'

const Mailreseaux = () => {
    return (
        <div className='mailres-container'>
                <div className='maillogo'>
                    <h4>MAIL</h4>
                    <img src={logoGMAIL} alt="Logo Gmail" />
                </div>
                <div className='reslogo'>
                    <h4>MES RESEAUX</h4>
                    <img src={logoLINKDIN} alt="Logo LinkdIn" />
                    <img src={logoGITHUBGD} alt="Logo Github" />
            </div>
        </div>        
    );
};

export default Mailreseaux;