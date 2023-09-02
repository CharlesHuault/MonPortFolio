import React from 'react';
import '../styles/components/card.scss'

const Card = ({cover}) => {
    return (
        <div className='card'>
            <div className='coverimg' style={{backgroundImage: `url(${cover})`}}></div>
        </div>
    );
};

export default Card;