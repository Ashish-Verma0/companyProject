import React from "react";
import "../navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="mainNav">
        <div className="txt">
          <div className="Quikiediv">
            <p className="Quikie">Quikie</p>
          </div>
          <div className="Appsdiv">
            <p className="Apps">Apps</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
