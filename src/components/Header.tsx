import React from 'react'
import '../css/Header.css'
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import {useState} from 'react'

function Header() {

  const {loginWithRedirect, isAuthenticated, logout} = useAuth0()


  
  return (
    <header>

        <Link to='/home'><img id='cetys-logo' src='https://www.cetys.mx/en/wp-content/uploads/2016/11/logo-cetys.png' /></Link>

        <div className='right-box'>

            <div className='inner-box'>
                <button><img id='search-icon' src='https://cdn-icons-png.flaticon.com/512/149/149852.png' alt='search-icon'/></button>
                <input id='search-bar'></input>
            </div>

            {isAuthenticated ?
            <button id='log-out' onClick={() => {
              logout({logoutParams: {returnTo: window.location.origin}})
            }}>
              <img id='user-icon' src='https://cdn-icons-png.flaticon.com/512/456/456212.png' alt='user-icon'/>
                Iniciar Sesión
            </button>
            :
            <button id='log-in' onClick={() => {
              loginWithRedirect()
            }}>
                <img id='user-icon' src='https://cdn-icons-png.flaticon.com/512/456/456212.png' alt='user-icon'/>
                Iniciar Sesión
            </button>
            }

        </div>

    </header>
  )
}

export default Header