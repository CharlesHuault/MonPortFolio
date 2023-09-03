import React from 'react';
import '../styles/components/mailreseaux.scss'

const Mailreseaux = () => {
    return (
        <div>
            <div className='mailres-container'>
                <div>
                    <h4>MAIL</h4>
                    <img src="./LogoGMAIL.svg" alt="Logo Gmail" />
                </div>
                <div>
                    <h4>MES RESEAUX</h4>
                    <img src="./LogoLINKDIN.svg" alt="Logo LinkdIn" />
                    <img src="./LogoGITHUBGD.svg" alt="Logo Github" />
                </div>
            </div>
        </div>
    );
};

export default Mailreseaux;