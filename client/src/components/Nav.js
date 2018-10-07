import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import '../stylesheets/nav.css'

class Nav extends Component {
  render () {
    const currentPage = this.props.page;
    const routes = [
      {
        to: '/',
        slug: 'home',
        text: 'Home'
      },
      {
        to: '/collection/romantic',
        slug: 'collection',
        text: 'Romantic'
      },
      {
        to: '/collection/romantic/123',
        slug: 'item',
        text: 'Book A'
      },
      {
        to: '/login',
        slug: 'login',
        text: 'Login'
      },
    ]
    return (
      <div className="navContainer">
        <div className="logoContainer">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menuContainer">
          {
            routes.map(route => (
              <Link 
                key={Math.random()}
                to={route.to} 
                className={currentPage === route.slug ? 'active' : ''}
              >
                { route.text }
              </Link>
            ))
          }
        </div>
        <div className="actionContainer">
          <div className="search">
            <i className="fas fa-search"></i>
          </div>
          <div className="shoppingcart">
            <i className="fas fa-shopping-bag"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav