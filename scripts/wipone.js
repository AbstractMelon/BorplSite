const axios = require('axios');

async function fetchModsData() {
  try {
    const response = await axios.get('https://thunderstore.io/c/3dash/api/v1/package/');
    const data = response.data;
    const mods = data.results.map(mod => ({
      name: mod.name,
      author: mod.owner.username,
      img: mod.icon,
      description: mod.description,
      github: `https://github.com/${mod.owner.username}/${mod.name}`
    }));
    const formattedData = { mods };
    console.log(JSON.stringify(formattedData, null, 2));
  } catch (error) {
    console.error('Error fetching mods data:', error);
  }
}

fetchModsData();
