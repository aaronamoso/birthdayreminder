import React from "react";  
import BirthdayItem from "./BirthdayItem";


const BirthdayList = ({ birthdays }) => {
    return (
      <div>
        {birthdays.map((person) => (
          <BirthdayItem key={person.id} person={person} />
        ))}
      </div>
    );
  };


export default BirthdayList;