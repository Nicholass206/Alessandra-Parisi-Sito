import { useState } from 'react';
import { useScrollContext } from '../Pages/ScrollContext';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const isHeaderVisible = useScrollContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Headerstyle = {
    color: isHeaderVisible ? "#705936" : "#ffffff",
  };

  return (
    <div className="HeaderSection">
      <nav className=" container">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} color={Headerstyle.color} /> : <FiMenu size={30} color={Headerstyle.color} />}
        </div>
        <ul className={`HeaderList ${menuOpen ? 'open' : ''}`}>
          <a href="#home"><li className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`} style={Headerstyle}>HOME</li></a>
          <a href="#chi-sono"><li className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`} style={Headerstyle}>CHI SONO</li></a>
          <a href="#galleria-icone"><li className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`} style={Headerstyle}>GALLERIA ICONE</li></a>
          <a href="#ceri-pasquali"><li className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`} style={Headerstyle}>CERI PASQUALI</li></a>
          <a href="#colori"><li className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`} style={Headerstyle}>COLORI IN ALTRE FORME</li></a>
          <a href="#mostre"><li className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`} style={Headerstyle}>MOSTRE</li></a>
          <a href="#appunti"><li className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`} style={Headerstyle}>APPUNTI</li></a>
        </ul>
      </nav>
      <style jsx>{`
       
        @media (max-width: 768px) {
          .menu-icon {
            display: block;
          }
          .HeaderList {
            display: ${menuOpen ? 'flex' : 'none'};
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
