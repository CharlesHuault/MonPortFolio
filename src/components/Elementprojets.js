import React, {useState} from 'react';
import Card from './Card';
import '../styles/components/elementprojets.scss'
import maqBooki from '../assets/img/MaqDeskBooki.png'
import maqSophie from '../assets/img/MaqDeskSophie.png'
import maqMenu from '../assets/img/MaqDeskMenu.png'
import maqNina from '../assets/img/MaqDeskNina.png'
import maqKasa from '../assets/img/MaqDeskKasa.png'
import maqGrim from '../assets/img/MaqDeskGrim.png'
import Modalbooki from './Modalbooki';
import Modalsophie from './Modalsophie';
import Modalqwenta from './Modalqwenta';
import Modalnina from './Modalnina';
import Modalkasa from './Modalkasa';
import Modalgrim from './Modalgrim';


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
                cover={maqBooki}
                id='Booki'
                isOpen={isOpen && selectedCardId === 'Booki'}
                openModal={() => openModal('Booki')}
                closeModal={closeModal}>
                Frontend basique de l'application <br /> d'une agence de voyage
            </Card>
            
            <Card
                cover={maqSophie}
                id='Sophie'
                isOpen={isOpen && selectedCardId === 'Sophie'}
                openModal={() => openModal('Sophie')}
                closeModal={closeModal}>
                Frontend dynamique d'un portfolio d'architecte
            </Card>

            <Card
                cover={maqMenu}
                id='Menu'
                isOpen={isOpen && selectedCardId === 'Menu'}
                openModal={() => openModal('Menu')}
                closeModal={closeModal}
            >
                Simulation de gestion de projet d'une application <br /> de menus pour des restaurants
            </Card>

            <Card
                cover={maqNina}
                id='Nina'
                isOpen={isOpen && selectedCardId === 'Nina'}
                openModal={() => openModal('Nina')}
                closeModal={closeModal}
            >
                Optimisation technique SEO et débuggage <br /> d'un portfolio de photographe
            </Card>

            <Card
                cover={maqKasa}
                id='Kasa'
                isOpen={isOpen && selectedCardId === 'Kasa'}
                openModal={() => openModal('Kasa')}
                closeModal={closeModal}
            >
                Création de l'application ReactJs <br /> d'une agence de location immobilière
            </Card>

            <Card
                cover={maqGrim}
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
                <Modalkasa isOpen={isOpen && selectedCardId === 'Kasa'} closeModal={closeModal} />
                <Modalgrim isOpen={isOpen && selectedCardId === 'Grim'} closeModal={closeModal} />
            </div>
            <div id='a-propos'></div>
    </div>
    );
};

export default Elementprojets;