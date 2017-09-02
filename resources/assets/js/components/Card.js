import React from 'react';

const Card = (card) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 card"> 
      <img src={card.element.imageUrl} />
    </div>
  )
};

export default Card;