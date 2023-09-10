import React from 'react';
import '../styles/components/linkbutton.scss'
import logoGithub1 from '../assets/logos/github1.svg'

const Linkbutton = ({title, hasLogo, url, anchor}) => {
  if (url) {
    return (
      <a href={url} className='Accueilbutton'>
        <div className='button-data'>
          <div className='button-logo'>{hasLogo && <img src={logoGithub1} alt='Logo Github' />}</div>
          <div className={`button-title${hasLogo ? ' has-logo-margin' : ''}`}>{title}</div>
        </div>
      </a>
    );
  } else if (anchor) {
    return (
      <a href={`#${anchor}`} className='Accueilbutton'>
        <div className='button-data'>
          <div className='button-logo'>{hasLogo && <img src={logoGithub1} alt='Logo Github' />}</div>
          <div className={`button-title${hasLogo ? ' has-logo-margin' : ''}`}>{title}</div>
        </div>
      </a>
    );
  } else {
    return (
      <button className='Accueilbutton'>
        <div className='button-data'>
          <div className='button-logo'>{hasLogo && <img src={logoGithub1} alt='Logo Github' />}</div>
          <div className={`button-title${hasLogo ? ' has-logo-margin' : ''}`}>{title}</div>
        </div>
      </button>
    );
  }
};


export default Linkbutton;