require('dotenv').config();

const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;

const bodyParser = require("body-parser")
const db = require('./database/db');
db();

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes/index'));

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});