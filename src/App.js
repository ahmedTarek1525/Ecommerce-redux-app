import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProducts from './components/FilteredProducts/SingleProducts';
import Login from './components/Login/Login';
import { useSelector} from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  const {authUser} = user;
  console.log ("user" , user);
  console.log ("authUser" , authUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={authUser ? <Main></Main> : <Login></Login> }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts></FilteredProducts>}></Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProducts></SingleProducts>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
