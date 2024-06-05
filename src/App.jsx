import React from 'react';
import { BrowserRouter,Routes, Route, Router } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './components/dashboard';
import Invoices from './components/invoices';
import Products from './components/products';


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard/>}/>
          <Route path='invoices' element={<Invoices/>}/>
          <Route path='products' element={<Products/>}/>
          </Route>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App
