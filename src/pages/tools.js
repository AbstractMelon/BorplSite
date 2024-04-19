import React from 'react';

function Tools() {
    return (
        <div className='container'>
            <h2>Essential tools to streamline your Bopl development workflow:</h2>
            <div className='tool' >
                <a href='https://visualstudio.microsoft.com/vs/community/' className='toolName'>
                    Visual Studio 2022
                    <p className='toolDescription'>Visual Studio 2022 is a fully-featured integrated development environment (IDE) for Android, iOS, Windows, web, and cloud. It is a powerful code editor that allows you to write, debug, and deploy your code quickly and efficiently.</p>
                    </a>
                <img className='toolImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FV%2Fvisual-studio-icon-2022-logo-8E86B4B761-seeklogo.com.png&f=1&nofb=1&ipt=f4038466c1d8c134a7161d91e2924b33436225d694891cd0bbba50344670a846&ipo=images' alt='Visual Studio 2022'/>
            </div>
            <div className='tool' >
                <a href='https://github.com/sinai-dev/UnityExplorer' className='toolName'>
                    UnityExplorer
                    <p className='toolDescription'>An in-game UI for exploring, debugging and modifying IL2CPP and Mono Unity games..</p>
                    </a>
                <img className='toolImg' src='https://gcdn.thunderstore.io/live/repository/icons/Coal-Unity_Explorer-4.3.5.png.128x128_q95.png' alt='Unity Explorer logo'/>
            </div>
            <div className='tool' >
                <a href='https://github.com/BepInEx/BepInEx/releases' className='toolName'>
                    BepInEx
                    <p className='toolDescription'>BepInEx is a plugin / modding framework for Unity Mono, IL2CPP and .NET framework games (XNA, FNA, MonoGame, etc.), Most bopl mods use BepInEx.</p>
                    </a>
                <img className='toolImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F34462599%2F212477590-090325df-4fd0-461b-9d85-737a63bb28e4.png&f=1&nofb=1&ipt=eec6f53b8c4522f78d61211d83b2bd88449627012a49d6a6d1f20e4cca865c31&ipo=images' alt='BepInEx logo'/>
            </div>
            <div className='tool' >
                <a href='https://harmony.pardeike.net/articles/intro.html' className='toolName'>
                    HarmonyX
                    <p className='toolDescription'>Harmony gives you an elegant and high level way to alter functionality in applications written in C#. It does this at runtime by monkey patching methods unlike other solutions that change the content of dll files. In bopl mods this is mostly used for modifying abilities.</p>
                    </a>
                <img className='toolImg' src='https://raw.githubusercontent.com/pardeike/Harmony/master/HarmonyLogo.png' alt='HarmonyX logo'/>
            </div>
            <div className='tool' >
                <a href='https://github.com/dnSpy/dnSpy' className='toolName'>
                    dnSpy
                    <p className='toolDescription'>dnSpy is a debugger and .NET assembly editor. You can use it to edit and debug assemblies even if you don't have any source code available.</p>
                    </a>
                <img className='toolImg' src='https://cdn-b.saashub.com/images/app/service_logos/53/3755c8e998c7/large.png?1559662840' alt='DnSpy logo'/>
            </div>\
        </div>
    );
}

export default Tools;