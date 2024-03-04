const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

app.use(require('./routes/index'));

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});