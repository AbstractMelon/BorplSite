import React from 'react';
import Head from '../elements/Head';

function notFound() {
    return (
        <>
            <Head title="404 - Page Not Found" />
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
            <p>Go back to <a href="/">Homepage</a>.</p>
        </>
    );
}

export default notFound;