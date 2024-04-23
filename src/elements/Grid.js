import React, { useEffect, useState } from 'react';

const Grid = ({ source }) => {
    const [mods, setMods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchMods = async () => {
            let jsonData = await fetch(process.env.PUBLIC_URL + '/data/' + source);
            jsonData = await jsonData.json();
            console.log(jsonData);
            setMods(jsonData.mods);
        };
        fetchMods();
    }, []);

    function aboutPopup() {
        let popup = document.querySelector('.aboutPopup');
        popup.classList.toggle('active');
    }

    return (
        <div>
            <input
                className="search"
                type="text"
                placeholder="Search..."
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <div className='gallery'>
                {[
                    ...mods.filter((mod) => mod.name.toLowerCase().includes(searchTerm.toLowerCase())).map((mod) => (
                        <div key={mod.name} className='mod'>
                            <img className="modImg" src={`../../images/modicons/${mod.img}`} alt={mod.name} onClick={() => window.open(mod.github, '_blank') || './503.html'}/>
                            <p className="modInfo modName">{mod.name}</p>
                            <p className="modInfo modAuthor">{mod.author || 'Mod author not found.'}</p>
                            <div className="buttonContainer">
                                <button className="btn About" onClick={aboutPopup}>About</button>
                                <button className="btn Download" onClick={() => window.open(mod.github, '_blank') || './503.html'}>Download</button>
                            </div>
                            <div className="aboutPopup" onClick={aboutPopup}><div className='popupText'>{mod.description || 'Error 503: Text currently not available.'}</div></div>
                        </div>
                    )),
                    ...Array(Math.max(0, 3 - mods.filter((mod) => mod.name.toLowerCase().includes(searchTerm.toLowerCase())).length)).fill(<div className='mod invisible'></div>)
                ]}
            </div>
        </div>
    );
}

export default Grid;