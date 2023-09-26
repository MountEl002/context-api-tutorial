import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`${isDarkMode ? "header header--dark" : "header"} `}>
      <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      <button className="header__button" onClick={toggleTheme}>
        {isDarkMode ? (
          <span>
            <FontAwesomeIcon icon={faToggleOff} style={{ height: "30px" }} />
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faToggleOn} style={{ height: "30px" }} />
          </span>
        )}
      </button>
    </header>
  );
}

export default Header;
