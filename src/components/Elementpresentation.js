import React from 'react';
import Photo from './Photo';
import Monotext from './Monotext';
import '../styles/components/elementpresentation.scss'

const Elementpresentation = () => {
    return (
        <div className='elempresentation'>
            <Photo />
            <Monotext/>
        </div>
    );
};

export default Elementpresentation;