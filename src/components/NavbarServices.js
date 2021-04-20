import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarServices(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            E.TROC
            <i class="fab fa-typo3" />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/servicesnc"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/biensnc"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Biens
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/espaceP"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  props.onDeconnexion();
                }}
              >
                Deconnexion
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavbarServices;
