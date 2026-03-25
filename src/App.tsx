
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { StatsTicker } from './components/sections/StatsTicker';
import { Vision } from './components/sections/Vision';
import { About } from './components/sections/About';

import { Solutions } from './components/sections/Solutions';
import { CreativeGallery } from './components/sections/CreativeGallery';
import { Portfolio } from './components/sections/Portfolio';
import { Logos } from './components/sections/Logos';
import { Team } from './components/sections/Team';

function App() {
  return (
    <div className="min-h-screen bg-mgc-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col pb-24">
        {/* Sections */}
        <Hero />
        <StatsTicker />
        <Vision />
        <Solutions />
        <Logos />
        <CreativeGallery />
        <About />
        {/* <Services /> */}
        {/* <Logos /> */}
        <Portfolio />
        <Team />
      </main>

      <Footer />
    </div>
  );
}

export default App;
