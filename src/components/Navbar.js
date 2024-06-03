import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Coctail Guru</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
