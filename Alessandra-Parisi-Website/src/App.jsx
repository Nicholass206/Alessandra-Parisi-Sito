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
import { useEffect } from 'react';

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, [location]);
  

  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollProvider>
        <ScrollRestoration />
        {location.pathname === "/" && <Header />}
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/:categoryPath" element={<CategoryPage />} />
          <Route path="/Colori/:coloriPath" element={<ColoriInAltreFormepage />} />
          <Route path="/Mostre/:mostrePath" element={<MostrePage />} />
        </Routes>
      </ScrollProvider>
    </>
  );
}

export default App;
