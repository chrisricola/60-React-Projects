import React from 'react'
import './App.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



const App = () => {
  return (
    <div className='app'>
      <div className='header__logo'></div>
      <div className="header__search"></div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingBasketIcon fontSize='large'/>
          <span className="nav__itemLineTwo">0</span>
        </div>
      </div>
    </div>
  )
}

export default App