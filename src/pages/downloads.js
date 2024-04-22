import React from 'react';
import { useState } from 'react';
import ModsList from '../elements/ModsList';

function Downloads() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <>
            <div className="tabs">
                <button className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Mods</button>
                <button className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Maps</button>
                <button className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Guns</button>
                <button className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>Texture Packs</button>
            </div>
            <div className="tab-content">
                {activeTab === 1 && <div className="tab-pane"><ModsList/></div>}
                {activeTab === 2 && <div className="tab-pane">Maps</div>}
                {activeTab === 3 && <div className="tab-pane">Guns</div>}
                {activeTab === 4 && <div className="tab-pane">Texture Packs</div>}
            </div>
        </>
    );
}

export default Downloads;