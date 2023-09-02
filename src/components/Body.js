import React from 'react';
import Bodytitle from './Bodytitle';
import '../styles/components/body.scss'
import Bodyelement from './Bodyelement';

const Body = () => {
    return (
        <div className='body-background'>
            <div className='first-element'>
                <Bodytitle title='PRESENTATION' />
                <Bodyelement/>
            </div>
            <div>
                
            </div>

        </div>
    );
};

export default Body;