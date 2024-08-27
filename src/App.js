import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Services from './components/Services';
import Clients from './components/Clients';
import NewsEvents from './components/NewsEvents';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Industries from './components/Industries';
import Customers from './components/Customers';
import Events from './components/Events';
import Contacts from './components/Contacts';
import FloatingButton from './components/FloatingButton';

function App() {
  const location = useLocation(); 

  return (
    <div className="App">
      <Navbar />
      {location.pathname !== '/contacts' && <FloatingButton />}
      <Routes>
        <Route path="/" element={
          <>
            <HeroCarousel />
            <Services />
            <Clients />
            <NewsEvents />
            <Contact />
          </>
        } />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
