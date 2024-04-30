// https://thunderstore.io/c/bopl-battle/api/v1/package/
const fs = require('fs');
const axios = require('axios');

async function fetchMods() {
    try {
        const response = await axios.get('https://thunderstore.io/c/bopl-battle/api/v1/package/');
        const mods = response.data;

        const formattedMods = mods.map(mod => {
            const name = mod.name;
            const version = mod.versions[0].version_number;
            const downloadUrl = mod.versions[0].download_url;
            return `"${name}", "${version}", "${downloadUrl}"`;
        });

        fs.writeFileSync('modlist.txt', formattedMods.join('\n'));
        
        console.log('Mods data written to modlist.txt!');
    } catch (error) {
        console.error('Error fetching mods:', error.message);
    }
}

fetchMods();
