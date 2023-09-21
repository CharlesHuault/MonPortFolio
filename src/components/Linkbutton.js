import React from 'react';
import '../styles/components/linkbutton.scss'
import logoGithub1 from '../assets/logos/github1.svg'

//Composant qui défini le pattern des liens principaux de la page
const Linkbutton = ({ title, hasLogo, url, anchor }) => {
  // Si le bouton envoie vers une url
  if (url) {
    return (
      <a href={url} className='Accueilbutton' target="_blank" rel="noopener noreferrer">
        <div className='button-data'>
          <div className='button-logo'>{hasLogo && <img src={logoGithub1} alt='Logo Github' />}</div>
          <div className={`button-title${hasLogo ? ' has-logo-margin' : ''}`}>{title}</div>
        </div>
      </a>
    );
  // Si le bouton envoie vers une ancre 
  } else if (anchor) {
    return (
      <a href={`#${anchor}`} className='Accueilbutton'>
        <div className='button-data'>
          <div className='button-logo'>{hasLogo && <img src={logoGithub1} alt='Logo Github' />}</div>
          <div className={`button-title${hasLogo ? ' has-logo-margin' : ''}`}>{title}</div>
        </div>
      </a>
    );
  //  Si le bouton a n'importe quelle autre fonction
  } else {
    return (
      <button className='Accueilbutton' target="_blank" rel="noopener noreferrer">
        <div className='button-data'>
          <div className='button-logo'>{hasLogo && <img src={logoGithub1} alt='Logo Github' />}</div>
          <div className={`button-title${hasLogo ? ' has-logo-margin' : ''}`}>{title}</div>
        </div>
      </button>
    );
  }
};


export default Linkbutton;