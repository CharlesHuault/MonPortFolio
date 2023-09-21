import React from 'react';
import '../styles/components/card.scss';

// Composant créant le pattern d'une card de projet
const Card = ({ id, cover, children, openModal }) => {
  const handleOpenModal = () => {
    openModal(id);
  };

  return (
      <div className='card' id={id} onClick={handleOpenModal}>
      <div className='coverimg' style={{ backgroundImage: `url(${cover})` }}>
        <div className='cardtext'>{children}</div>
      </div>
    </div>
  );
};

export default Card;