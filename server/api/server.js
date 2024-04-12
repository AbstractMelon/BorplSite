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

// Middleware for handling file uploads
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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

// Endpoint for installing splotch.zip
app.post('/api/loaders/splotch', upload.single('splotch'), (req, res) => {
    console.log("Hi from splotch");
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    fs.renameSync(req.file.path, path.join(__dirname, '../data/loaders/Splotch.zip'));
    res.status(200).json({ message: 'Splotch.zip installed successfully' });
});

// Endpoint for installing bepinex.zip
app.post('/api/loaders/bepinex', upload.single('bepinex'), (req, res) => {
    console.log("Hi from bepinex");
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    fs.renameSync(req.file.path, path.join(__dirname, '../data/loaders/BepInEx.zip'));
    res.status(200).json({ message: 'Bepinex.zip installed successfully' });
});

// Wildcard route for Discord
app.get('/discord*', (req, res) => {
    res.redirect('https://discord.com');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
