import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './pages/Home/Home';
import './styles/global-styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { DeletePage } from './pages/Delete/deletePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Home />}/>
        <Route path="/deleted" element = {<DeletePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
