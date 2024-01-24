import React, {useState} from 'react';
import data from './data';
const Card = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const [cardName, setCardName] = useState("card");
  

  return (
    <div>
      {data.map((bod) => {
        return (
          <div>
            {
              bod.day === day && bod.month === month + 1 &&
              <div className={cardName} onClick={(e) => {setCardName("click")}}>
                <div className="img">
                  <img src="" alt="" />
                </div>
                <h4 className='name1'>{bod.name}</h4>
                {
                  cardName === 'click' && 
                  <button className='btn btn1'>{bod.age}</button>
                }
              </div>
            }
          </div>
        )
      })}
    </div>
  )
}

export default Card