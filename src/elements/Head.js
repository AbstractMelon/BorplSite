import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Head = () => {
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.split('/')[1]; // Get the current path
        if (currentPath === '') {
            document.title = 'Borpl - Home'; // Update the document title for home page
        } else {
            document.title = `Borpl - ${currentPath.charAt(0).toUpperCase() + currentPath.slice(1)}`; // Update the document title for other pages
        }
    }, [location]);
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="The ultimate Bopl Battle wiki" />
            <meta name="og:title" content="Borpl Wiki" />
            <meta name="og:description" content="The ultimate Bopl Battle wiki" />
            <meta name="og:image" content="/images/logo.jpg" />
        </div>
    );
};

export default Head;