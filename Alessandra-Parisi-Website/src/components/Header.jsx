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
          <li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            CHI SONO
          </li>
          <li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            GALLERIA ICONE
          </li>
          <li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            CERI PASQUALI
          </li>
          <li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            COLORI IN ALTRE FORME
          </li>
          <li
            className={`HeaderLink ${isHeaderVisible ? 'hover-white' : 'hover-brown'}`}
            style={Headerstyle}
          >
            MOSTRE
          </li>
        </ul>
      </nav>
    </div>
  );
}
