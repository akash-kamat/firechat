import React from 'react'
import './css/Nav.css'
import { useEffect } from 'react'
export default function Nav({ logout }) {

    return (
        <div className='navbar' id='navbar'>
            <div className='navbar-title-container'>
                <h1 className='navbar-title'>Firechat🔥</h1>
            </div>
            {logout && <div className='logout-container'>
                <button className='logout-btn' onClick={logout}>Logout</button>
            </div>}

        </div>
    )
}
