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
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('express-session')({
    secret: 'BIG SECRET',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.static('public'));

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

const PORT = process.env.PORT || 3000;

// Routes

app.get('/', (req, res) => {
    fs.readFile('states.json', function (err, data) {
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

app.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    User.register(new User({ username: username }),
        password, (err, user) => {
            if (err) {
                console.log(err);
                return res.render('signup');
            }

            passport.authenticate("local")(
                req, res, function () {
                    res.render("states");
                });
        })

})

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), (req, res) => {
});

app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
})

// const isLoggedIn = (req, res, next) => {
//     if (req.isAuthenticated()) return next();
//     res.redirect('/login');
// };

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));