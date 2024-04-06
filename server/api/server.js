const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '../..//client')));

// API endpoints
app.get('/api/guns', (req, res) => {
    // Read guns data from guns.json
    fs.readFile(path.join(__dirname, '../JSONdb/data/guns/guns.json'), (err, data) => {
        if (err) {
            console.error('Error reading guns data:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        const guns = JSON.parse(data);
        res.json(guns);
    });
});

// Additional API endpoints
app.get('/api/modlist', (req, res) => {
    // Read mods data from mods.json
    fs.readFile(path.join(__dirname, '../JSONdb/data/mods/mods.json'), (err, data) => {
        if (err) {
            console.error('Error reading mods data:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        const mods = JSON.parse(data);
        res.json(mods);
    });
});

app.get('/api/mod/:modId', (req, res) => {
    const modId = req.params.modId;
    // Read mods data from mods.json
    fs.readFile(path.join(__dirname, '../JSONdb/data/mods/mods.json'), (err, data) => {
        if (err) {
            console.error('Error reading mods data:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        const mods = JSON.parse(data);
        const mod = mods.mods.find(mod => mod.name === modId);
        if (!mod) {
            res.status(404).json({ error: 'Mod not found' });
            return;
        }
        res.json(mod);
    });
});

// Wildcard route for Discord
app.get('/discord*', (req, res) => {
    res.redirect('https://discord.com');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
