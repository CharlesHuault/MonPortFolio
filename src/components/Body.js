import React from 'react';
import Bodytitle from './Bodytitle';
import '../styles/components/body.scss'
import Elementpresentation from './Elementpresentation';
import Elementcompetences from './Elementcompetences';
import Elementprojets from './Elementprojets';

const Body = () => {
    return (
        <div className='body-background'>
            <div className='first-element'>
                <Bodytitle title='PRESENTATION'/>
                <div className='bodyelement-container'>
                    <Elementpresentation />
                </div>
            </div>
            <div className='second-element'>
                <Bodytitle title='COMPETENCES' />
                <div className='bodyelement-container'>
                    <Elementcompetences/>
                </div>
            </div>
            <div className='third-element'>
                <Bodytitle title='PROJETS' />
                <div className='bodyelement-container'>
                    <Elementprojets/>
                </div>
            </div>

        </div>
    );
};

export default Body;