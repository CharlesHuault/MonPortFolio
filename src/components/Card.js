import React from 'react';
import '../styles/components/card.scss'

const Card = ({cover, children}) => {
    return (
        <div className='card'>
            <div className='coverimg' style={{ backgroundImage: `url(${cover})` }}><div className='cardtext'>{children}</div></div>
            
        </div>
    );
};

export default Card;