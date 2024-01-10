import React from 'react'
import { Link, } from 'react-router-dom'
import { Button, Container } from '@mui/material'
import Logo from '../../image/logo.jpg'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
         <div className="header">
          <div className="header-logo">
            <Link to='/'>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="header-nav">
            <ul className="nav-link">
              <li className="link-item">
                <Link to='/exchange'>Биржа</Link>
              </li>
              <li className="link-item">Ворки</li>
              <li className="link-item">Конкурсы</li>
              <li className="link-item">Создать</li>
              <li className="link-item">Создать заказ</li>
            </ul>
            <Button className="nav-btn">Регистрация</Button>
           <Link to='/login'>
             <Button variant="contained" className="nav-btn nav-btn__login">Войти</Button>
           </Link>
          

          </div>
        </div>
    </div>
  )
}

export default Navbar