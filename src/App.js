import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Strip from './components/Strip';
import Categories from './components/Categories';
import NewArrival from './components/NewArrival';
import TrendingProducts from './components/TrendingProducts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Strip />
      <Categories />
      <NewArrival />
      <TrendingProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;