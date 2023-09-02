import React from 'react';
import Card from './Card';
import '../styles/components/elementprojets.scss'

const Elementprojets = () => {
    return (
        <div className='cards-list'>
            <Card cover='./MaqDeskBooki.png' />
            <Card cover='./MaqDeskSophie.png' />
            <Card cover='./MadDeskMenu.png' />
            <Card cover='./MaqDeskNina.png' />
            <Card cover='./MaqDeskKasa.png' />
            <Card cover='./MaqDeskGrim.png' />
        </div>
    );
};

export default Elementprojets;