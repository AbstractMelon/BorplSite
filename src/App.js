import React, { useEffect } from 'react';
import './index.css';
import Header from './elements/header';
import Head from './elements/Head';
import Footer from './elements/Footer';
import { Analytics } from "@vercel/analytics/react"
import { Outlet, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function App() {
    const [cookies] = useCookies(['theme']);

    useEffect(() => {
        const theme = cookies.theme || 'none';
        document.body.className = '';
        document.body.classList.add(theme);
    }, [cookies.theme]);

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