import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

const Product = ({id, title, price, rating, image}) => {

  const [state, dispatch] = useStateValue();

  return (
   
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                  <small>$</small>
                  <strong>{price}</strong>
                  </p>
                <div className="product__rating">
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <p>⭐️</p>
                    ))
                  }
                </div>
            </div>
            <img src={image} className='product__image'/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
   
  )
}

export default Product