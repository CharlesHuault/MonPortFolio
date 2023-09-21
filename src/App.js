import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Modal from 'react-modal';



const App = () => {
  Modal.setAppElement('#root');
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