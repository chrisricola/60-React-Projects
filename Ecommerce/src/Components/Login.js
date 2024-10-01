import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import Storefront from '@mui/icons-material/Storefront';
import { auth } from './Firebase';

const Login = () => {
  return (
    <div className='login'>
        <Link to='/' style={{ textDecoration: "none"}}>
            <div className="login__logo">
                <StorefrontIcon className='login__logoImage' fontSize="large" />
                <h2 className="login__logoTitle">eShop</h2>
            </div>
        </Link>

    </div>
  )
}

export default Login