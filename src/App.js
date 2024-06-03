import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';

import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
}

export default App;
