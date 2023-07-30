import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Especificaciones } from './components/Especificaciones';
//theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";       
//core
import "primereact/resources/primereact.min.css";   
//icons
import 'primeicons/primeicons.css';
//prime flex
import 'primeflex/primeflex.css';
import { Galeria } from './components/Galeria';
import { Proximamente } from './components/Proximamente';
import { Contacto } from './components/Contacto';

        

function App() {

  return (
    <BrowserRouter>
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especificaciones" element={<Especificaciones />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/proximamente" element={<Proximamente />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>

  )
}

export default App
