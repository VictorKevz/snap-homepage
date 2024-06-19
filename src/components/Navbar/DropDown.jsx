import React from "react";
import arrowUp from "../../assets/images/icon-arrow-up.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import "../css/dropdown.css";

function DropDown({ section, isActive, toggleDropDown }) {
  return (
    <li className="list-name">
      <div onClick={() => toggleDropDown(section.name)} className="nav-link">
        {section.name}
        {section.items.length != 0 ? (
          <img src={isActive ? arrowUp : arrowDown} alt="icon-arrow-up/down" />
        ) : null}
      </div>
      {isActive && section.items.length != 0 && (
        <ul className="dropdown">
          {section.items.map((sublink, index) => (
            <div key={index} className="drop-down-item">
              {sublink.icon ? (
                <img src={sublink.icon} alt={`${sublink.name} icon`} />
              ) : null}
              <li>{sublink.name}</li>
            </div>
          ))}
        </ul>
      )}
    </li>
  );
}

export default DropDown;
