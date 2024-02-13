import React from 'react';
import Navbar from './components/Navbar';
import Pages from './components/Pages';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
