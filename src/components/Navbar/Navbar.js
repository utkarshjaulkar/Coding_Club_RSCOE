import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import './Navbar.css'
class Navbar extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">
          <Link to="/">
            <img src="./images/logo-2.png" alt="" />
          </Link>
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <Link className="nav-links" to="/events">
            <li>
              <i className="fa-solid fa-calendar-days"></i>
              Events
            </li>
          </Link>

          <Link className="nav-links" to="/faculty">
            <li>
              <i className="fa-solid fa-address-book"></i>
              Faculty-Coordinators
            </li>
          </Link>

          <Link className="nav-links" to="/team">
            <li>
              <i className="fa-solid fa-people-group"></i>
              Core-Team
            </li>
          </Link>

          <Link className="nav-links" to="/about">
            <li>
              <i className="fa-solid fa-circle-info"></i>
              About
            </li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar
