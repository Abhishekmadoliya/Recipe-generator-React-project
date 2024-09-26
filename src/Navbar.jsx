// import React from 'react'

import Searchbox from "./body/Searchbox";

function Navbar() {
  return (
    <>
    <div className="navbar" >
      <nav>
        <div className="nav-left">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About me</a>
          <a href="#">Contact me</a>
        </div>
        {/* <div className="nav-right"></div> */}
      </nav>
    </div>

    <Searchbox/>
    
    {/* <button ></button> */}
    </>
  );
}

export default Navbar;
