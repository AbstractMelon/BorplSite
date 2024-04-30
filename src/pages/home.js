import React from 'react';

function Home() {
    return (
        <div className='container'>

            <h1>Welcome to borpl!</h1>
            <p>Borpl is a free and open-source Manager, Website, and bot for <a href="https://zapraygames.com/">Zapray games</a>.</p>

            <p>We are a community of developers, designers, and gamers who want to make the best bopl experience in the world.</p>

            <section id="downloads">
                <h2>Downloads!</h2>
                <p>Get ready to dive into Bopl with our massive collection of mods, maps, guns, and texture packs!</p>
                <p>Click below to start downloading!</p>
                <a href="/downloads" className="button">GO TO DOWNLOADS</a>
            </section>

            <section id="tutorials">
                <h2>Tutorials</h2>
                <p>Learn the ins and outs of Bopl development through our comprehensive tutorials.</p>
                <p>Click below to start learning</p>
                <a href="/wiki" className="button">GO TO TUTORIALS</a>
            </section>

            <section id="community">
                <h2>Community</h2>
                <p>Connect with fellow Bopl enthusiasts, exchange ideas, and stay updated.</p>
                <a href="/community" className="button">GO TO COMMUNITY!</a>
            </section>
        </div>
    );
}

export default Home;
