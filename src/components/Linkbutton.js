import React from 'react';
import '../styles/components/linkbutton.scss'

const Linkbutton = ({title, hasLogo}) => {
    return (
        <div>            
            <button className='Accueilbutton'>
                <div className='button-data'>
                    <div className='button-logo'>{hasLogo && <img src='./github1.svg' alt='Logo Github' />}</div>
                    <div className={`button-title${hasLogo ? ' has-logo-margin' : ''}`}>{title}</div>
                </div>
            </button>
        </div>
    );
};

export default Linkbutton;