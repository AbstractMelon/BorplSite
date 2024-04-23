import React from 'react';

function Sample() {
    return (
        <div className='container'>
            <h1>Hello, World!</h1>
            <p>Small text</p>
            <a href='/'className='button' hover>Test button</a>
            <div className='container'>
                <h2>Subheader</h2>
                <p>More text</p>
                <a href='/'className='button'>A button</a><br/><br/>
            </div>
        </div>
    );
}

export default Sample;