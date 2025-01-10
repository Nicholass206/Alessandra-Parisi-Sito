import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import './Categories.css';
import HeroPage from './Pages/HeroPage';
import CategoryPage from './Pages/CategoryPage';
import '../src/fonts/Roxborough.ttf';
import { ScrollProvider } from '../src/Pages/ScrollContext';
import ColoriInAltreFormepage from './Pages/ColoriInAltreFormePage';
import MostrePage from './Pages/MostrePage';

function App() {
  const location = useLocation(); 

  return (
    <>
      <ScrollProvider>
        
        {location.pathname === "/" && <Header />}
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/:categoryPath" element={<CategoryPage />} />
          {/* <Route path="/:coloriPath" element={<ColoriInAltreFormepage />} /> */}
          {/* <Route path="/:mostrePath" element={<MostrePage />} /> */}
        </Routes>
      </ScrollProvider>
    </>
  );
}

export default App;

