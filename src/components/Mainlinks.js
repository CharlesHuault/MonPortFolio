import React from 'react';
import Linkbutton from './Linkbutton';
import '../styles/components/mainlinks.scss'
import cv from '../assets/CharlesHuaultCV.pdf'

const Mainlinks = () => {
    return (
        <div className='mainlinks'>
            <Linkbutton title='Contact' anchor="contact"/>
            <Linkbutton title='Mon CV' url={cv} target="_blank"/>
            <Linkbutton title='GitHub' hasLogo={true} url="https://github.com/CharlesHuault"/>
        </div>
    );
};

export default Mainlinks;