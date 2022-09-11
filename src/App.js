import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Error from './component/Error/Error';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
