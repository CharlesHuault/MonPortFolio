import React, {useState} from 'react';
import Card from './Card';
import '../styles/components/elementprojets.scss'
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    


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
                    {t('projectsblock.booki1')} <br /> {t('projectsblock.booki2')}
            </Card>
            
            <Card
                cover={maqSophie}
                id='Sophie'
                isOpen={isOpen && selectedCardId === 'Sophie'}
                openModal={() => openModal('Sophie')}
                closeModal={closeModal}>
                {t('projectsblock.sophie')}
            </Card>

            <Card
                cover={maqMenu}
                id='Menu'
                isOpen={isOpen && selectedCardId === 'Menu'}
                openModal={() => openModal('Menu')}
                closeModal={closeModal}
            >
                {t('projectsblock.menu1')} <br /> {t('projectsblock.menu2')}
            </Card>

            <Card
                cover={maqNina}
                id='Nina'
                isOpen={isOpen && selectedCardId === 'Nina'}
                openModal={() => openModal('Nina')}
                closeModal={closeModal}
            >
                {t('projectsblock.nina1')} <br /> {t('projectsblock.nina2')}
            </Card>

            <Card
                cover={maqKasa}
                id='Kasa'
                isOpen={isOpen && selectedCardId === 'Kasa'}
                openModal={() => openModal('Kasa')}
                closeModal={closeModal}
            >
                {t('projectsblock.kasa1')} <br /> {t('projectsblock.kasa2')}
            </Card>

            <Card
                cover={maqGrim}
                id='Grim'
                isOpen={isOpen && selectedCardId === 'Grim'}
                openModal={() => openModal('Grim')}
                closeModal={closeModal}
            >
                {t('projectsblock.grim1')} <br /> {t('projectsblock.grim2')}
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