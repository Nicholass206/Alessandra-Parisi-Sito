import { useState } from "react";
import { useScrollContext } from "../../Pages/ScrollContext";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

export default function Header() {
  const isHeaderVisible = useScrollContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className={`HeaderSection d-flex flex-column justify-content-center ${
        isHeaderVisible ? "header-light" : "header-dark"
      }`}
    >
      <nav className="container">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FiX size={30} color={isHeaderVisible ? "#f1eee8" : "#705936"} />
          ) : (
            <FiMenu size={30} color={isHeaderVisible ? "#705936" : "#f1eee8"} />
          )}
        </div>
        <ul className={`HeaderList ${menuOpen ? "open" : ""}`}>
          <a href="#home">
            <li
              className={`HeaderLink ${
                isHeaderVisible ? "hover-white" : "hover-brown"
              }`}
            >
              HOME
            </li>
          </a>
          <a href="#chi-sono">
            <li
              className={`HeaderLink ${
                isHeaderVisible ? "hover-white" : "hover-brown"
              }`}
            >
              CHI SONO
            </li>
          </a>
          <a href="#galleria-icone">
            <li
              className={`HeaderLink ${
                isHeaderVisible ? "hover-white" : "hover-brown"
              }`}
            >
              GALLERIA ICONE
            </li>
          </a>
          <a href="#ceri-pasquali">
            <li
              className={`HeaderLink ${
                isHeaderVisible ? "hover-white" : "hover-brown"
              }`}
            >
              CERI PASQUALI
            </li>
          </a>
          <a href="#colori">
            <li className ={`HeaderLink ${
              isHeaderVisible ? 'hover-white':'hover-brown' 
            }`}>COLORI IN ALTRE FORME</li>
          </a>
          <a href="#mostre">
            <li className={`HeaderLink ${
              isHeaderVisible ? 'hover-white': 'hover-brown'
            }`}>MOSTRE</li>
          </a>
          <a href="#contatti">
            <li className={`HeaderLink ${
              isHeaderVisible ? 'hover-white':'hover-brown'
            }`}>CONTATTI</li>
          </a>
        </ul>
      </nav>
      <style jsx>{`
        @media (max-width: 1000px) {
          .menu-icon {
            display: block;
          }
          .HeaderList {
            display: ${menuOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            width: 100%;
            padding: 1rem;
            text-align: center;
          }
          .HeaderLink {
            padding: 10px;
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
