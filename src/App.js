import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./styles/app.scss"
import Home from './pages/Home';


const App = () => {
  return (
    <div className='Page'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;