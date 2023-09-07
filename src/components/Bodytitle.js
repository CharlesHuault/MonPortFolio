import React from 'react';
import '../styles/components/bodytitle.scss'

const Bodytitle = ({ title }) => {


    return (
        <div className='bodytitle'>
            <h2>{title}</h2>
        </div>
    );
};

export default Bodytitle;