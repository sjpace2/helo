const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');

const PORT = 3005;
const app = express();
app.use(bodyParser.json());

app.listen( PORT || 3005, ()=> console.log(`Listening on port ${PORT || 3005}`));