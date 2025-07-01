import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import './App.css';
import '../src/components/Categories/Categories.css';
import HeroPage from '../src/components/Hero/HeroPage';
import CategoryPage from '../src/components/Categories/CategoryPage';
import '../src/fonts/Roxborough.ttf';
import { ScrollProvider } from '../src/Pages/ScrollContext';
import ColoriInAltreFormepage from '../src/components/ColoriInAltreForme/ColoriInAltreFormePage';
import MostrePage from '../src/components/Mostre/MostrePage';
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
