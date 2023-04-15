import React from 'react';
import logo from './logo.svg';
import './Top.css';
import Header from '../../components/Header/Header';
import TopImage from '../../components/TopImage/TopImage';
import About from '../../components/About/About';
import Contents from '../../components/Contents/Contents';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <div className="top">
      <Header />
      <TopImage />
      <About />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
