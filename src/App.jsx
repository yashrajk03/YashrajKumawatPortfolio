import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Header />
      <main>
        {/* The Hero section is the first thing a user sees */}
        <Hero /> 
        
        {/* Project showcase section */}
        <Projects />
        
        {/* Education and other details */}
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;