import React from 'react';
import Card from './Card';
import UpcomingBirthday from './UpcomingBirthday';



function App() {
  return (
    <div className='body'>
      <h1 style={{color: 'lightpink'}}>Today's Birthday</h1>
      <Card />
      <h1 style={{color: 'lightgreen'}}>Upcoming Birthday</h1>
      <UpcomingBirthday />
    </div>
  );
}

export default App;
