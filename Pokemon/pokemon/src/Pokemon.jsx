import React from 'react'

const Pokemon = ({ability1, ability2, height, weight, img, className}) => {
  return (
    <div className={className}>
      <div className="card" >
      <img src={img} alt=''className='card-img-top' style={{height:100, width:100}} />
        <div className="card-body">
          <button className='btn-outline-info btn'>Abilites</button>
          <button className='btn-outline-danger btn'>{ability1}, {ability2}</button> <br />
          <button className='btn-outline-info btn'>Height</button>
          <button className='btn btn-outline-danger'>{height} inch</button><br /> 
          <button className='btn btn-outline-info'>Weight</button>
          <button className='btn btn-outline-danger'>{weight} gm</button>
        </div>
      </div> 
    </div>
  )
}

export default Pokemon