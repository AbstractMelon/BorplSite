import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Community from './pages/community';
import Tools from './pages/tools';
import Downloads from './pages/downloads';
import Wiki from './pages/wiki';
import Home from './pages/home';
import Sample from './pages/sample';
import NotFound from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="community" element={<Community />} />
      <Route path="home" element={<Home />} />
      <Route path="tools" element={<Tools />} />
      <Route path="wiki" element={<Wiki />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="sample" element={<Sample />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
