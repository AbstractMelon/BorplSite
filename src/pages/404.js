import React from 'react';
import Head from '../elements/Head';

function NotFound() {
    return (
        <>
            <Head title="404 - Page Not Found" />
            <div className='container'>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
                <p><a href="/">Go back to Homepage</a>.</p>
            </div>
        </>
    );
}

export default NotFound;