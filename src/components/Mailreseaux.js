import React from 'react';
import '../styles/components/mailreseaux.scss'

const Mailreseaux = () => {
    return (
        <div className='mailres-container'>
                <div className='maillogo'>
                    <h4>MAIL</h4>
                    <img src="./LogoGMAIL.svg" alt="Logo Gmail" />
                </div>
                <div className='reslogo'>
                    <h4>MES RESEAUX</h4>
                    <img src="./LogoLINKDIN.svg" alt="Logo LinkdIn" />
                    <img src="./LogoGITHUBGD.svg" alt="Logo Github" />
            </div>
        </div>        
    );
};

export default Mailreseaux;