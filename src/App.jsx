/* eslint-disable no-sequences */
import {Routes, Route } from "react-router-dom";

// Banner
import Banner from "./components/Banner/Banner";
// Page d'accueil
import Home from './pages/Home/Home';
// Page Apropos
import Apropos from "./pages/Apropos/Apropos";
// Page Contact
import Contact from "./pages/Contact/Contact";
// Page Contact
import Projet from "./pages/Projet/Projet";
// Erreur 404
import Error from "./components/Error/Error";
// Footer
import Footer from './components/Footer/Footer';

import Fleche from "./components/Fleche/Fleche";

export default function App() {
  return (
<div className="App">
  <Banner/>
  <Fleche/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Apropos" element={<Apropos />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Projet/:id" element={<Projet />} />
    <Route path="*" element={<Error />} />
  </Routes>
<Footer/>
</div>
  );
}
