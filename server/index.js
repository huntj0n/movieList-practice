//PACKAGES
require('dotenv').config();
const express = require('express');
const massive = require('massive');

//CONTROLLERS
const movieCtrl = require('./Controllers/movieControllers');

const { SERVER_PORT,
        CONNECTION_STRING } = process.env;

//MIDDLEWARE
const app = express();

app.use(express.json());

massive({
    connectionSTring: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((db) => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server connected on port: ${SERVER_PORT}`));
}).catch((err) => {
    console.log(err);
    resizeBy.status(500).send(err);
});

//ENDPOINTS
app.get('/api/movies', movieCtrl.getMovies)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies:id', movieCtrl.editMovie)
app.delete('/api/movies:id', movieCtrl.deleteMovie)