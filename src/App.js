import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import NewsEvents from './components/NewsEvents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
          <Navbar />
          <Hero />
          <Services />
          <Clients />
          <NewsEvents />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
