
import './App.css';
import { useState } from 'react';
import { data } from './data.js';
import BirthdayList from './BirthdayList.js';
import ClearButton from './ClearButton.js';

function App() {

  const [birthdays, setBirthdays] = useState(data);

  const clearAll = () => {
    setBirthdays([ ]);
  };


  return (
    <div className="App">
      <h1>{birthdays.length} Birthdays Today</h1>
      <BirthdayList birthdays = {birthdays} />
      <ClearButton clearAll={clearAll} />
    </div>
  );
};

export default App;
