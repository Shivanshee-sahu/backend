import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const app = express();
const port = process.env.PORT || 3000;

// Derive __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set static path
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../src/templates/views');
const partialsPath = path.join(__dirname, '../src/templates/partials');

app.use(express.static(publicPath));

// Set view engine and views directory
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Register partials directory
hbs.registerPartials(partialsPath);

// Routes
app.get('/index', (req, res) => {
    res.render('index'); // Ensure 'index' matches the filename 'index.hbs'
});

app.get('/about', (req, res) => {
    res.render('about'); // Ensure 'about' matches the filename 'about.hbs'
});

app.get('*', (req, res) => {
    res.send("Page not found");
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
