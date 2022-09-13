import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Error from './component/Error/Error';
import Footer from './component/Footer/Footer';
import AboutUs from './component/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
