import React from 'react';
import Photo from './Photo';
import '../styles/components/bodyelement.scss'
import Monotext from './Monotext';

const Bodyelement = () => {
    return (
        <div className='bodyelement-container'>
            <Photo />
            <Monotext/>
        </div>
    );
};

export default Bodyelement;