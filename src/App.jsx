import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Features />
      <Screenshots />
      <CTAFooter />
    </div>
  );
}

export default App;
