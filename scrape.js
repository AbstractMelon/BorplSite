const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const scrapeMods = async () => {
    const { data } = await axios.get('https://thunderstore.io/c/bopl-battle/');

    const $ = cheerio.load(data);
    const mods = [];

    // idk thunderstore api
    $('.col-6.col-md-4.col-lg-3.mb-2.p-1.d-flex.flex-column').each((i, element) => {
        const name = $(element).find('h5.mb-0.overflow-hidden.text-nowrap.w-100').attr('title');
        const author = $(element).find('.overflow-hidden.text-nowrap.w-100 a').text();
        const img = $(element).find('.w-100').attr('src');
        const github = $(element).find('a').attr('href');

        mods.push({
            key: i + 1,
            name,
            author,
            img,
            github
        });
    });

    return { mods };
};

const mergeMods = async () => {
    const newMods = await scrapeMods();
    const existingMods = JSON.parse(fs.readFileSync(path.join(__dirname, '/public/data/mods.json'), 'utf8'));

    const mergedMods = {
        mods: [...existingMods.mods]
    };

    newMods.mods.forEach(newMod => {
        if (!existingMods.mods.some(mod => mod.name === newMod.name)) {
            mergedMods.mods.push({ ...newMod, key: mergedMods.mods.length + 1 });
        }
    });

    fs.writeFileSync(path.join(__dirname, '/public/data/mods.json'), JSON.stringify(mergedMods, null, 2));
};

mergeMods();