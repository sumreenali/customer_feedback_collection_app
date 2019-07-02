const express = require('express');  //import express using require because node doesn't support import express from express 

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser')
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express(); //initialize express object as app, all the router we create in future will use express using this app object

/** Body parser is a middleware  used to get the body from the incoming req
 * and parse it into json format,
 * we are using this to get the object of token from the nncomgin stripe request
 *  at backend and parse it into json format
 */


    /*
     * Middlewares Section 
     */

app.use(bodyParser.json());
//enable cookie
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey] //array allow us to use multiple keys for encryption
    })
);
app.use(passport.initialize());
app.use(passport.session());


    /*
    * Routes Handling for Development mode
    */

require('./routes/authRoute')(app);
require('./routes/billingRoute')(app);


    /*
     * Route Handling for Production mode
     */

     if(process.env.NODE_ENV === 'production'){
       
        /*
        *  Express will serve up production assests 
        *  like our MediaDeviceInfo.js File, or main.css file
        */
       
       app.use(expres.static('client/build'));

        /*
         * Express will serve up the index.html file 
         * if it doesn't recognize the route.
         */

         const path = require('path');
         app.get('*',(req, res) =>{
             res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
         });
     }




    /**
     * Port setting for Development 
     * and production mode 
     */

const PORT = process.env.PORT || 5000;  //define PORT to run on heroku production env as well at 5000 for dev env
app.listen(PORT);   //listen this app at localhost port 5000
//https://young-citadel-94258.herokuapp.com/