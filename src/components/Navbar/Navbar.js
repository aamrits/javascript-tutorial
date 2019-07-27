import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="sidebar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <button className="close-btn" onClick={ this.props.toggleBtn }><i className="fas fa-times"></i></button>
            <Link to="/" className="navbar-brand">Interview Q&As</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/js-questions-basic'>Javascript Questions: Basics</Link>
              </li>
              <li className="nav-item">
                <Link to='/js-questions-advanced'>Javascript Questions: Advanced</Link>
              </li>                    
            </ul>

            <Link to="/" className="navbar-brand">Concepts</Link>
            <ul className="navbar-nav">            
              <li className="nav-item">
                <Link to='/deep-shallow-copy'>Deep Copy & Shallow Copy</Link>
              </li>
              <li className="nav-item">
                <Link to='/looping'>Looping in Objects and Array</Link>
              </li>
              <li className="nav-item">
                <Link to='/example'>Example</Link>
              </li>
            </ul>
          </nav>
          <footer>
            <p>Copyright by Amrit &copy;2019</p>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Navbar;