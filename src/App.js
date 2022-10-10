import { Route, Routes } from 'react-router-dom';
import Lenis from '@studio-freight/lenis'
import './App.css';

import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Error from './component/Error/Error';
import Footer from './component/Footer/Footer';
import AboutUs from './component/AboutUs/AboutUs';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      // easing: (x) => (x === 1 ? 1 : 1 - Math.pow(1 - x, 3)), // https://easings.net
      easing: (x) => (x === 1 ? 1 : Math.sin((x * Math.PI) / 2)), // https://easings.net
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
