import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProducts from './components/FilteredProducts/SingleProducts';
import Login from './components/Login/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts></FilteredProducts>}></Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProducts></SingleProducts>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
