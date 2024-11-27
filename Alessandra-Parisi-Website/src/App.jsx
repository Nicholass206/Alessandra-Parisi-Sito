import Header from './components/Header'
import './App.css'
import { Route, Routes } from "react-router-dom"
import HeroPage from './Pages/HeroPage'
import '../src/fonts/Roxborough.ttf';
import ChiSono from './Pages/ChiSono';
import { ScrollProvider } from '../src/Pages/ScrollContext';

function App() {
  

  return (
    <>
 
    
    <ScrollProvider>
    <Header/>
    <HeroPage/>
    <ChiSono/>
    </ScrollProvider>
    
      
    </>
  )
}

export default App
