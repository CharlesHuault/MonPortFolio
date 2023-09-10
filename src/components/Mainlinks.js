import React from 'react';
import Linkbutton from './Linkbutton';
import '../styles/components/mainlinks.scss'
import cv from '../assets/CharlesHuaultCV.pdf'

const Mainlinks = () => {
    return (
        <div className='mainlinks'>
            <Linkbutton title='Contact' anchor="contact"/>
            <Linkbutton title='Mon CV' url={cv}  type="application/pdf"/>
            <Linkbutton title='GitHub' hasLogo={true} url="https://github.com/CharlesHuault" rel="noopener noreferrer"/>
        </div>
    );
};

export default Mainlinks;