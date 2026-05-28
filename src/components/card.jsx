import React from 'react';
import './css/card.css';


const Card = ({name,initials,email,addressCity,addressStreet}) => {

  return (
    <div className="card">
      <div className="avatar" aria-label="User initials">
        {initials} //memanggil props
      </div>
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="email">{email}</p>
        <p className="address">
          {addressStreet}, {addressCity}
        </p>
      </div>
    </div>
  );
};

export default Card;