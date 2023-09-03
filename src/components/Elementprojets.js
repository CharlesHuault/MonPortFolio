import React from 'react';
import Card from './Card';
import '../styles/components/elementprojets.scss'

const Elementprojets = () => {
    return (
        <div className='cards-list'>
            <Card cover='./MaqDeskBooki.png'>Frontend basique de l'application <br /> d'une agence de voyage</Card>
            <Card cover='./MaqDeskSophie.png'>Frontend dynamique d'un portfolio d'architecte</Card>
            <Card cover='./MadDeskMenu.png' >Simulation de gestion de projet d'une application <br /> de menus pour des restaurants</Card>
            <Card cover='./MaqDeskNina.png' >Optimisation technique SEO et débuggage <br /> d'un portfolio de photographe</Card>
            <Card cover='./MaqDeskKasa.png' >Création de l'application ReactJs <br /> d'une agence de location immobilière </Card>
            <Card cover='./MaqDeskGrim.png' >Backend d'une application de notation <br /> de livres  pour une librairie </Card>
        </div>
    );
};

export default Elementprojets;