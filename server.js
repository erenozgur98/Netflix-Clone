const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost/state-app', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

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

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));