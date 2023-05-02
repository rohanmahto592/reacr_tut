import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route,Routes } from 'react-router-dom';
import Product from './component/Product';
import Featured from './component/Featured';
import NewProduct from './component/NewProduct';
import Users from './component/Users';
const LazyAbout=React.lazy(()=> import('./component/About.js'));

function App() {
  return (
   <>
   <Navbar/>
    <Routes>  
      <Route path='/'element={<Home/>} ></Route>
      <Route path='about'element={
      <React.Suspense fallback="loading.....">
        <LazyAbout/>
        </React.Suspense>
      } ></Route>
      <Route path='products' element={<Product/>}>
        <Route index element={<NewProduct/>}></Route> {/*default component rendering using index routing*/}
        <Route path='featured' element={<Featured/>}></Route>  {/* child routing */}
        <Route path='new' element={<NewProduct/>}></Route>  {/* child routing */}
      </Route>
      <Route path='users' element={<Users/>}>
      </Route>
    </Routes>
  </>

  );
}

export default App;
//  path without slash are relative link
// if you use / with child routing then it willnot append to the current route but it will append to the home