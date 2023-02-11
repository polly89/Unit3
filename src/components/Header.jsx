import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2 className="h2-home">Devmountain Eatery</h2>
      <nav>
        <Link to=''>
          <button className="header-btn btn-hov">Home</button>
        </Link>
        <Link to='/newRecipe'>
          <button className="header-btn btn-hov">Add Recipe</button>
        </Link>  
      </nav>
    </header>
  );
};

export default Header;
