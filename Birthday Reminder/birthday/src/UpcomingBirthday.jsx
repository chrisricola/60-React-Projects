import React from 'react'
import data from './data';

const UpcomingBirthday = () => {

  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  return (
    <div>
      {data.map((bod) => {
        return (
          <div>
            {
              bod.day > day && bod.month === month + 1 &&
              <div>
                <h1>{bod.name}</h1>
              </div>
            }
          </div>
        )
      })}
    </div>
  )
}

export default UpcomingBirthday