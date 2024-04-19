import React from 'react';

function Home() {
    return (
        <div className='container'>
            <section id="downloads">
                <h2>Downloads!</h2>
                <p>Get ready to dive into Bopl with our vast collection of mods, maps, guns, and texture packs!</p>
                <p>Click Below to start downloading!</p>
                <a href="/downloads" className="button">GO TO DOWNLOADS</a>
            </section>

            <section id="tutorials">
                <h2>Tutorials</h2>
                <p>Learn the ins and outs of Borpl development through our comprehensive tutorials.</p>
                <p>Click Below to start learning</p>
                <a href="/wiki" className="button">GO TO TUTORIALS</a>
            </section>

            <section id="community">
                <h2>Community</h2>
                <p>Connect with fellow Borpl enthusiasts, exchange ideas, and stay updated.</p>
                <a href="./community" className="button">GO TO COMMUNITY!</a>
            </section>
        </div>
    );
}

export default Home;