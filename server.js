const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Define API routes
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.json('Welcome to the borpl API!');
});

// Define routes for different API endpoints
apiRouter.get('/mods', (req, res) => {
  const mods = require('./public/data/mods.json');
  res.json(mods);
});

// Route for downloading a specific mod
apiRouter.get('/mods/:modname/download', (req, res) => {
  const modName = req.params.modname;
  res.send(`Downloading ${modName}`);
});

// Route for serving maps
apiRouter.get('/maps', (req, res) => {
  res.json('Maps');
});

// Route for serving guns
apiRouter.get('/guns', (req, res) => {
  const guns = require('./public/data/guns.json');
  res.json(guns);
});

// Route for serving a specific map
apiRouter.get('/maps/:mapname', (req, res) => {
  const mapName = req.params.mapname;
  res.send(`Map: ${mapName}`);
});

// Route for serving a specific gun
apiRouter.get('/guns/:gunname', (req, res) => {
  const gunName = req.params.gunname;
  res.send(`Gun: ${gunName}`);
});

// Mount the API router at /api
app.use('/api', apiRouter);

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
