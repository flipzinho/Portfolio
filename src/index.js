import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Contact } from './pages/Contact/Contact';
import { About } from './pages/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/portfolio' element={<Portfolio/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
