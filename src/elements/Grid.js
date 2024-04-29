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
                        <div key={mod.name} onClick={() => window.open(mod.github, '_blank') || './503.html'} className='mod'>
                            <img className="modImg" src={`${mod.img}`} alt={mod.name}/>
                            <p className="modInfo modName">{mod.name}</p>
                            <p className="modInfo modAuthor">{mod.author || 'Mod author not found.'}</p>
                        </div>
                    )),
                    ...Array(Math.max(0, 4 - mods.filter((mod) => mod.name.toLowerCase().includes(searchTerm.toLowerCase())).length)).fill(<div className='mod invisible'></div>)
                ]}
            </div>
        </div>
    );
}

export default Grid;