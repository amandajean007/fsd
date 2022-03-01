import React from 'react';
import NavBar from './Navbar';
import './Header.css';


const Header = (props) => {
  return (
    <div className="header">
      <NavBar
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </div>
  );
};

export default Header;