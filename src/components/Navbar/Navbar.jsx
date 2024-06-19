import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import iconMenu from "../../assets/images/icon-menu.svg";
import iconCloseMenu from "../../assets/images/icon-close-menu.svg";
import data from "../../data";
import DropDown from "./DropDown";
import "../css/navbar.css"

function Navbar(props) {
  const [isOpen, setOpen] = useState(false);
  const [dropDownState, setDropDownState] = useState({});

  function toggleMenuIcon() {
    setOpen(!isOpen);
    props.onClose();
  }

  function toggleDropDown(name) {
    setDropDownState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  }

  return (
    <header className="header-wrapper">
      <nav className="nav-container">
        <div className="logo-left-links-container">
          <figure className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </figure>
          <ul className={`links-container ${isOpen ? 'open' : ''}`}>
            {data.map((section) => (
              <DropDown
                key={section.id}
                section={section}
                isActive={dropDownState[section.name]}
                toggleDropDown={toggleDropDown}
              />
            ))}
          </ul>
        </div>
        <ul className={`login-reg-container ${isOpen ? 'open' : ''}`}>
          <li className="link login">Login</li>
          <li className="link reg">Register</li>
        </ul>
        <div className="toggle-container" onClick={toggleMenuIcon}>
          <img src={isOpen ? iconCloseMenu : iconMenu} className="menu-icon" alt="menu icon"/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
