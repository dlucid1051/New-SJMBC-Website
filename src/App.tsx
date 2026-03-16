import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Welcome from './sections/Welcome';
import ServiceTimes from './sections/ServiceTimes';
import Ministries from './sections/Ministries';
import Pastor from './sections/Pastor';
import WatchLive from './sections/WatchLive';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <Hero />
        <Welcome />
        <ServiceTimes />
        <Ministries />
        <Pastor />
        <WatchLive />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
