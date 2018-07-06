const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');
require('dotenv').config();
const { CONNECTION_STRING, SESSION_SECRET } = process.env;


const PORT = 3005;
const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING)
    .then( db => {
        app.set('db', db)
        console.log('DB Connected')
    }).catch( err => console.log(err));

app.listen( PORT || 3005, ()=> console.log(`Listening on port ${PORT || 3005}`));