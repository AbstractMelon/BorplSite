import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

function Settings() {
    const [cookies, setCookie] = useCookies(['theme']);
    const [theme, setTheme] = useState(cookies.theme || 'light');

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        setCookie('theme', newTheme, { path: '/' });
    };

    return (
        <div className='container settings'>
            <h3>Themes:</h3>
            <button onClick={() => changeTheme('light')}>Light Theme</button>
            <button onClick={() => changeTheme('dark')}>Dark Theme</button>
            <button onClick={() => changeTheme('menu')}>Bopl (Experimental)</button>
            <button onClick={() => changeTheme('')}>System Default</button>
        </div>
    );
}

export default Settings;