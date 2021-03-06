import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Routes,BrowserRouter } from 'react-router-dom'  
import Home from './Home';

const routing = (  
  <BrowserRouter>  
      <Routes>
    
      <Route path="/" element={<App />} ></Route> 
      <Route path="home" element={<Home />} ></Route> 

      </Routes>
      
    
  </BrowserRouter>  
)  
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
