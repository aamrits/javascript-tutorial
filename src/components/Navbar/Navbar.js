import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to='/' className="navbar-brand text-uppercase">JavaScript Tutorial</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/js-questions-basic'>Javascript Questions: Basics</Link>
            </li>
            <li className="nav-item">
              <Link to='/js-questions-advanced'>Javascript Questions: Advanced</Link>
            </li>                    
          </ul>

          <a className="navbar-brand" href="#">Concepts</a>
          <ul className="navbar-nav">            
            <li className="nav-item">
              <Link to='/deep-shallow-copy'>Deep Copy & Shallow Copy</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;