import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import AnimeDetails from './pages/AnimeDetails';
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}