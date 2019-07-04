const express = require('express');  //import express using require because node doesn't support import express from express 

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser')
const keys = require('./config/keys');
const cors = require('cors');
//const sgMail = require('@sendgrid/mail');

require('./models/User');
require('./models/Survey');
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

     /**
      * CORS Configuration
      */
     

     app.use(cors({
        origin: 'http://localhost',
        allowedHeaders: ["Content-Type", "Authorization"]
    }));
    
    app.options('*', cors())
    
    
    app.all('', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        //Auth Each API Request created by user.
        next();
    });
    


    /*
    * Routes Handling for Development mode
    */

require('./routes/authRoute')(app);
require('./routes/billingRoute')(app);
require('./routes/surveyRoutes')(app);


    /*
     * Route Handling for Production mode
     */

     if(process.env.NODE_ENV === 'production'){
       
        /*
        *  Express will serve up production assests 
        *  like our MediaDeviceInfo.js File, or main.css file
        */
       
       app.use(express.static('client/build'));

        /*
         * Express will serve up the index.html file 
         * if it doesn't recognize the route.
         */

         const path = require('path');
         app.get('*', (req, res) =>{
             res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
         });
     }


     /**
      * Sendgrid request
      */

    
   //  app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!
    //  sgMail.setApiKey(keys.sendGridKey);
    //  app.get('/send-email', (req,res)=>{
    //      //Get Variables from query string in the search bar
    // const { recipient, sender, topic, text } = req.query; 

    // //Sendgrid Data Requirements
    //     const msg = {
    //         to: recipient, 
    //         from: sender,
    //         subject: topic,
    //         text: text,
    //     }

    //     //Send Email
    //     sgMail.send(msg)
    //     .then((msg) => console.log(text));
    // }); 
     





    /**
     * Port setting for Development 
     * and production mode 
     */

const PORT = process.env.PORT || 9000;  //define PORT to run on heroku production env as well at 5000 for dev env
app.listen(PORT);   //listen this app at localhost port 5000
//https://young-citadel-94258.herokuapp.com/