import React from 'react'
import data from '../data'


const Main = () => {
  return (
    <div className='main'>
        <h4>Our Premium Packages</h4>
        <div className="row">
            {
                data.map((item) => {
                    return (
                        <div className=" col-lg-4 col-md-6 col-sm-12">
                            <div className="card-body">
                                <h5 className='card-title'>{item.name}</h5>
                            </div>
                            <img src={item.url} alt='' />
                            <button className='price'>{item.day}Days: {item.price}</button>
                            <button className='hero-btn btn-2'>Visit</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Main