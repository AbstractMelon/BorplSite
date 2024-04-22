import React from 'react';

function redirect() {
    window.location.href = '/home';
}

const Header = () => {
    return (
    <div className='NavBar'>
        <div className='navAlign'>
            <img src="/images/borpl.png" className='logo' onClick={redirect} alt="Borpl Logo" />
            <a href="/" className="navItem">Home</a>
            <a href="/downloads" className="navItem">Downloads</a>
            <a href="/wiki" className="navItem">Wiki</a>
            <a href="/tools" className="navItem">Development Tools</a>
            <a href="/community" className="navItem">Community</a>
        </div>
    </div>
    );
};

export default Header;