import Header from './components/Header';
import './App.css';
import './Categories.css';
import { Route, Routes } from 'react-router-dom';
import HeroPage from './Pages/HeroPage';
import CategoryPage from './Pages/CategoryPage';
import '../src/fonts/Roxborough.ttf';
import { ScrollProvider } from '../src/Pages/ScrollContext';

function App() {
  return (
    <>
      <ScrollProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HeroPage />} />
        </Routes>
      </ScrollProvider>
      <Routes>
        <Route path="/:categoryPath" element={<CategoryPage />} />
      </Routes>

    </>
  );
}

export default App;

/*

<Route path="/altre-icone" element={<AltreIcone />} />
<Route path="/angeli" element={<  />} />
<Route path="/madre-di-dio" element={<MadreDiDio />} />
<Route path="/santi" element={<Santi />} />
<Route path="/le-feste" element={<LeFeste />} /> 
*/