import React from 'react';
import Mailreseaux from './Mailreseaux';
import '../styles/components/elementcontact.scss'
import Formulaire from './Formulaire';

const Elementcontact = () => {
    return (
        <div className='elemcontact'>
            <Mailreseaux />
            <Formulaire/>
        </div>
    );
};

export default Elementcontact;