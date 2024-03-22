import React from 'react'

const Modal = ({item, show}) => {
  if(show === false || item === null) {
    return null;
  }

  else {

  return (
    <div id="dish">
        <h4>{item.title}</h4>
        <div className="player">
            <img src={item.image} alt='' />
        </div>
        <div className="p">
            <p><button className='btn btn-danger'>{item.nutrition.nutrients[0].name}</button>
            <button className='btn btn-warning'>{item.nutrition.nutrients[0].amount} {item.nutrition.nutrients[0].unit} per {item.nutrition.weightPerServing.amount} {item.nutrition.weightPerServing.unit}</button>
            <button className='btn btn-success'>Percent of Daily Needs: {item.nutrition.nutrients[0].percentOfDailyNeeds}</button>
            </p>
            <p><button className='btn btn-danger'>{item.nutrition.nutrients[1].name}</button>
            <button className='btn btn-warning'>{item.nutrition.nutrients[1].amount} {item.nutrition.nutrients[0].unit} per {item.nutrition.weightPerServing.amount} {item.nutrition.weightPerServing.unit}</button>
            <button className='btn btn-success'>Percent of Daily Needs: {item.nutrition.nutrients[1].percentOfDailyNeeds}</button>
            </p>
            <p><button className='btn btn-danger'>{item.nutrition.nutrients[2].name}</button>
            <button className='btn btn-warning'>{item.nutrition.nutrients[2].amount} {item.nutrition.nutrients[2].unit} per {item.nutrition.weightPerServing.amount} {item.nutrition.weightPerServing.unit}</button>
            <button className='btn btn-success'>Percent of Daily Needs: {item.nutrition.nutrients[2].percentOfDailyNeeds}</button>
            </p>
            <p><button className='btn btn-danger'>{item.nutrition.nutrients[3].name}</button>
            <button className='btn btn-warning'>{item.nutrition.nutrients[3].amount} {item.nutrition.nutrients[3].unit} per {item.nutrition.weightPerServing.amount} {item.nutrition.weightPerServing.unit}</button>
            <button className='btn btn-success'>Percent of Daily Needs: {item.nutrition.nutrients[3].percentOfDailyNeeds}</button>
            </p>
            <p><button className='btn btn-danger'>{item.nutrition.nutrients[4].name}</button>
            <button className='btn btn-warning'>{item.nutrition.nutrients[4].amount} {item.nutrition.nutrients[4].unit} per {item.nutrition.weightPerServing.amount} {item.nutrition.weightPerServing.unit}</button>
            <button className='btn btn-success'>Percent of Daily Needs: {item.nutrition.nutrients[4].percentOfDailyNeeds}</button>
            </p>
            <p><button className='btn btn-danger'>{item.nutrition.nutrients[5].name}</button>
            <button className='btn btn-warning'>{item.nutrition.nutrients[5].amount} {item.nutrition.nutrients[5].unit} per {item.nutrition.weightPerServing.amount} {item.nutrition.weightPerServing.unit}</button>
            <button className='btn btn-success'>Percent of Daily Needs: {item.nutrition.nutrients[5].percentOfDailyNeeds}</button>
            </p>
        </div>
    </div>
  )
  }
}

export default Modal