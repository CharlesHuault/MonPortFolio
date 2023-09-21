import React from 'react';
import '../styles/components/skillsblock.scss'

// Composant de définition du pattern d'un bloc de compétences
const Skillsblock = ({ title, logos, textList}) => {
    return (
        <div className='skills-block'>
            <h4>{title}</h4>
            <div className='logos'>{logos}</div>
            <ul>
                {textList.map((item, index) => (
                    <li key={index} >{item} </li>
                ))}
            </ul>
        </div>
    );
};

export default Skillsblock;