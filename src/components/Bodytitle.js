import React from 'react';
import '../styles/components/bodytitle.scss'

const Bodytitle = ({ title }) => {
    const id = title.toLowerCase().replace(/\s/g, '-');


    return (
        <div className='bodytitle'>
            <h2 id={id}>{title}</h2>
        </div>
    );
};

export default Bodytitle;