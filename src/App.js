import React from 'react';
import './index.css';
import Header from './elements/header';
import Head from './elements/Head';
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
    
    <footer>
        <p>&copy; 2024 Borpl. All rights reserved.</p>
    </footer>

    </router>  );
}

export default App;