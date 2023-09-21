import React from 'react';
import Bodytitle from './Bodytitle';
import '../styles/components/body.scss'
import { useTranslation } from 'react-i18next';
import Elementpresentation from './Elementpresentation';
import Elementcompetences from './Elementcompetences';
import Elementprojets from './Elementprojets';
import Elementapropos from './Elementapropos';
import Elementcontact from './Elementcontact';


// Composant principal du Body du site, contient les composants des 5 blocs avec à chaque fois titre et container

const Body = () => {
    const { t } = useTranslation();
    return (
        <div className='body-background'>
            <div className='first-element'>
                <Bodytitle title={t('bodytitles.presentation')} />
                <div className='bodyelement-container'>
                    <Elementpresentation />
                </div>
            </div>
            <div className='second-element'>
                <Bodytitle title={t('bodytitles.skills')} />
                <div className='bodyelement-container'>
                    <Elementcompetences/>
                </div>
            </div>
            <div className='third-element'>
                <Bodytitle title={t('bodytitles.projects')} />
                <div className='bodyelement-container'>
                    <Elementprojets/>
                </div>
            </div>
            <div className='fourth-element'>
                <Bodytitle title={t('bodytitles.about')} />
                <div className='bodyelement-container'>
                    <Elementapropos/>
                </div>
            </div>
            <div className='fifth-element'>
                <Bodytitle title={t('bodytitles.contact')} />
                <div className='bodyelement-container'>
                    <Elementcontact/>
                </div>
            </div>
        </div>
    );
};

export default Body;