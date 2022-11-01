import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';

import Navbar  from './components/Navbar/Navbar';
import './App.scss';

const App = () => (
  <>
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
   
  </div>
  <Footer />
  </>
);

export default App;