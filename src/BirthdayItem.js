import React from "react";

const BirthdayItem = ({ person }) => {
    return (
      <div className="birthday-item">
        <img src={person.image} alt={person.name} />
        <div>
          <h2>{person.name}</h2>
          <p>{person.age} years</p>
          <p>{person.date}</p>
        </div>
      </div>
    );
  };
  
export default BirthdayItem;