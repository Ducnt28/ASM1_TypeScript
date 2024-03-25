import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Header.scss'
const Header: React.FC = () => {
  return (
    <header>
      <ul className='nav'>
        <li className='nav-item'>
        <NavLink className={`nav-link active`} to={`/`} >Trang chủ</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink className={`nav-link active`} to={`/about`} >About</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
