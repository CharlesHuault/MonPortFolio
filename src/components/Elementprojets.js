import React, {useState} from 'react';
import Card from './Card';
import '../styles/components/elementprojets.scss'
import Modalbooki from './Modalbooki';
import Modalsophie from './Modalsophie';
import Modalqwenta from './Modalqwenta';
import Modalnina from './Modalnina';


const Elementprojets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const openModal = (cardId) => {
    setIsOpen(true);
    setSelectedCardId(cardId);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCardId(null);
  };  

    return (
        <div className='cards-list-container'>
        <div className='cards-list'>
            <Card
                cover='./MaqDeskBooki.png'
                id='Booki'
                isOpen={isOpen && selectedCardId === 'Booki'}
                openModal={() => openModal('Booki')}
                closeModal={closeModal}>
                Frontend basique de l'application <br /> d'une agence de voyage
            </Card>
            
            <Card
                cover='./MaqDeskSophie.png'
                id='Sophie'
                isOpen={isOpen && selectedCardId === 'Sophie'}
                openModal={() => openModal('Sophie')}
                closeModal={closeModal}>
                Frontend dynamique d'un portfolio d'architecte
            </Card>

            <Card
                cover='./MaqDeskMenu.png'
                id='Menu'
                isOpen={isOpen && selectedCardId === 'Menu'}
                openModal={() => openModal('Menu')}
                closeModal={closeModal}
            >
                Simulation de gestion de projet d'une application <br /> de menus pour des restaurants
            </Card>

            <Card
                cover='./MaqDeskNina.png'
                id='Nina'
                isOpen={isOpen && selectedCardId === 'Nina'}
                openModal={() => openModal('Nina')}
                closeModal={closeModal}
            >
                Optimisation technique SEO et débuggage <br /> d'un portfolio de photographe
            </Card>

            <Card
                cover='./MaqDeskKasa.png'
                id='Kasa'
                isOpen={isOpen && selectedCardId === 'Kasa'}
                openModal={() => openModal('Kasa')}
                closeModal={closeModal}
            >
                Création de l'application ReactJs <br /> d'une agence de location immobilière
            </Card>

            <Card
                cover='./MaqDeskGrim.png'
                id='Grim'
                isOpen={isOpen && selectedCardId === 'Grim'}
                openModal={() => openModal('Grim')}
                closeModal={closeModal}
            >
                Backend d'une application de notation <br /> de livres  pour une librairie
            </Card>

                <Modalbooki isOpen={isOpen && selectedCardId === 'Booki'} closeModal={closeModal} />
                <Modalsophie isOpen={isOpen && selectedCardId === 'Sophie'} closeModal={closeModal} />
                <Modalqwenta isOpen={isOpen && selectedCardId === 'Menu'} closeModal={closeModal} />
                <Modalnina isOpen={isOpen && selectedCardId === 'Nina'} closeModal={closeModal} />
            </div>
            <div id='a-propos'></div>
    </div>
    );
};

export default Elementprojets;