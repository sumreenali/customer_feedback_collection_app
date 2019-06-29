const express = require('express');  //import express using require because node doesn't support import express from express 
const mongoose = require('mongoose');

const authRoute = require('./routes/authRoute');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express(); //initialize express object as app, all the router we create in future will use express using this app object

//enable cookie
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey] //array allow us to use multiple keys for encryption
    })
);
app.use(passport.initialize());
app.use(passport.session());



authRoute(app);

const PORT = process.env.PORT || 5000;  //define PORT to run on heroku production env as well at 5000 for dev env
app.listen(PORT);   //listen this app at localhost port 5000
//https://young-citadel-94258.herokuapp.com/