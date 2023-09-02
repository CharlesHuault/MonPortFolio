import React from 'react';
import Linkbutton from './Linkbutton';
import '../styles/components/mainlinks.scss'

const Mainlinks = () => {
    return (
        <div className='mainlinks'>
            <Linkbutton title='Contact'/>
            <Linkbutton title='Mon CV'/>
            <Linkbutton title='GitHub' hasLogo={true}/>
        </div>
    );
};

export default Mainlinks;