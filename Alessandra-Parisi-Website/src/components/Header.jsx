import { useScrollContext } from '../Pages/ScrollContext';

export default function Header() {
  const isHeaderVisible = useScrollContext();

  const Headerstyle = {
    color: isHeaderVisible ? "#705936" : "#ffffff",
  };

  return (
    <div className="HeaderSection">
      <nav className="Nav container">
        <ul className="HeaderList">
        <a href="#home"><li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            HOME
          </li></a>
          <a href="#chi-sono"><li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            CHI SONO
          </li></a>
         <a href="#galleria-icone"> <li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            GALLERIA ICONE
          </li></a>
          <a href="#ceri-pasquali"><li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            CERI PASQUALI
          </li></a>
          <a href="#colori"><li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            COLORI IN ALTRE FORME
          </li></a>
          <a href="#mostre"><li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            MOSTRE
          </li></a>
          <a href="#appunti"><li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            APPUNTI
          </li></a>
        </ul>
      </nav>
    </div>
  );
}
