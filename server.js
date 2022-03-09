
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');

const { animals } = require('./data/animals');
const express = require('express');

const PORT = process.env.PORT || 3001;

// To enstantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));

// route that access the css and js files for the page to load correctly.(middleware)
app.use(express.static('public'));

//parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// Make server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})