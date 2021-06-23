const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    fs.readFile('states.json', function(err, data) {
        if (err) {
            res.status(500).end();
        } else {
            res.render('states.ejs', {
                states: JSON.parse(data)
            });
        }
    });
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));