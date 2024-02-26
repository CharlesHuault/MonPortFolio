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
import screenCHWebvision from '../assets/img/screenchwebvision.png'
import screenCHWebvisionv2 from '../assets/img/screenchwebvisionv2.png'
import screenSandra from '../assets/img/screensandranutri.png'
import Modalbooki from './Modalbooki';
import Modalsophie from './Modalsophie';
import Modalqwenta from './Modalqwenta';
import Modalnina from './Modalnina';
import Modalkasa from './Modalkasa';
import Modalgrim from './Modalgrim';
import Modalchwebvision from './Modalchwebvision';
import Modalsandra from './Modalsandranutri';
import Modalchwebvisionv2 from './Modalchwebvisionv2';

// Composant contenant les cards et les modales des projets à mettre en avant
const Elementprojets = () => {
    const [isOpen, setIsOpen] = useState(false);    
    const [selectedCardId, setSelectedCardId] = useState(null);

    // Appel de i18n pour la traduction des textes du composant
    const { t } = useTranslation();   

    // Constantes d'ouverture et de fermeture des modales
  const openModal = (cardId) => {
    setIsOpen(true);
    setSelectedCardId(cardId);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCardId(null);
  };  

    return (
    // Création de chaque Card de projet, en injectant l'image de fond et le texte dans le pattern du composant ainsi que les fonctions d'ouverture et fermeture de modale
        <div className='cards-list-container'>
        <div className='cards-list'>  
                 <Card
                cover={screenCHWebvisionv2}
                id='CHWebvisionv2'
                isOpen={isOpen && selectedCardId === 'CHWebvisionv2'}
                openModal={() => openModal('CHWebvisionv2')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.chw3')} <br /> {t('projectsblock.chw4')}
                </Card>
        <Card
                cover={screenSandra}
                id='SandraNutri'
                isOpen={isOpen && selectedCardId === 'SandraNutri'}
                openModal={() => openModal('SandraNutri')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.sand1')} <br /> {t('projectsblock.sand2')}
                </Card>  
          <Card
                cover={screenCHWebvision}
                id='CHWebvision'
                isOpen={isOpen && selectedCardId === 'CHWebvision'}
                openModal={() => openModal('CHWebvision')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.chw1')} <br /> {t('projectsblock.chw2')}
                </Card>
            <Card
                cover={maqGrim}
                id='Grim'
                isOpen={isOpen && selectedCardId === 'Grim'}
                openModal={() => openModal('Grim')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.grim1')} <br /> {t('projectsblock.grim2')}
                </Card>
                <Card
                cover={maqKasa}
                id='Kasa'
                isOpen={isOpen && selectedCardId === 'Kasa'}
                openModal={() => openModal('Kasa')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.kasa1')} <br /> {t('projectsblock.kasa2')}
            </Card>

                <Card
                cover={maqNina}
                id='Nina'
                isOpen={isOpen && selectedCardId === 'Nina'}
                openModal={() => openModal('Nina')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.nina1')} <br /> {t('projectsblock.nina2')}
            </Card>
                <Card
                cover={maqMenu}
                id='Menu'
                isOpen={isOpen && selectedCardId === 'Menu'}
                openModal={() => openModal('Menu')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.menu1')} <br /> {t('projectsblock.menu2')}
                </Card>
                <Card
                cover={maqSophie}
                id='Sophie'
                isOpen={isOpen && selectedCardId === 'Sophie'}
                openModal={() => openModal('Sophie')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.sophie')}                
                </Card>
                <Card
                cover={maqBooki}
                id='Booki'
                isOpen={isOpen && selectedCardId === 'Booki'}
                openModal={() => openModal('Booki')}
                closeModal={closeModal}
                appElement={document.getElementById('root')}>
                {t('projectsblock.booki1')} <br /> {t('projectsblock.booki2')}
                
            </Card>

                {/* Intégration de chaque composant de modale avec les attributs pour leur ouverture et leur fermeture atitrés */}
                <Modalbooki isOpen={isOpen && selectedCardId === 'Booki'} closeModal={closeModal} />
                <Modalsophie isOpen={isOpen && selectedCardId === 'Sophie'} closeModal={closeModal} />
                <Modalqwenta isOpen={isOpen && selectedCardId === 'Menu'} closeModal={closeModal} />
                <Modalnina isOpen={isOpen && selectedCardId === 'Nina'} closeModal={closeModal} />
                <Modalkasa isOpen={isOpen && selectedCardId === 'Kasa'} closeModal={closeModal} />
              <Modalgrim isOpen={isOpen && selectedCardId === 'Grim'} closeModal={closeModal} />
          <Modalchwebvision isOpen={isOpen && selectedCardId === 'CHWebvision'} closeModal={closeModal} />
          <Modalsandra isOpen={isOpen && selectedCardId === 'SandraNutri'} closeModal={closeModal} />
          <Modalchwebvisionv2 isOpen={isOpen && selectedCardId === 'CHWebvisionv2'} closeModal={closeModal} />
            </div>
            <div id='a-propos'></div>
    </div>
    );
};

export default Elementprojets;