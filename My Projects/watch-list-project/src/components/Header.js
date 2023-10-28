import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={'/'}>Watch Lists</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to={'/watched'}>Watched Lists</Link>
            </li>
            <li>
              <Link to={"/add"}>
              <i className='fas fa-plus'></i>
              </Link>              
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header
