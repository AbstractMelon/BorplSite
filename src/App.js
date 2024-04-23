import React from 'react';
import './index.css';
import Header from './elements/header';
import Head from './elements/Head';
import Footer from './elements/Footer';
import { Analytics } from "@vercel/analytics/react"
import { Outlet, useLocation } from 'react-router-dom';

function App() {
    return (    
    <router> 
    <Head />
    <Header />

    <div className='container uncoloured'>
    <Outlet />
    </div>
    
    <Footer />

    </router>  );
}

export default App;