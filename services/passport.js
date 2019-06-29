const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('users');  // user model class

/*
create unique  identifier information from user record
handed over to passport to set that infromation evetually as cookie
to respond incoming request with cookie  next time on server 
*/

passport.serializeUser((user, done) => {
    done(null, user.id);
});

/*
Identifying user by extracting identifier token  from cookie 
*/ 
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    })
});


//use google auth service using passport core library
passport.use(new GoogleStrategy({ 
        
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL:'/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) =>{

        //check in db if the coming req profileid is save in db as exsisting googleid record

        User.findOne({googleId: profile.id}) 
            .then((exsistingUser) => {
                if(exsistingUser){

                    //if user esist don't create new instance for the user
                    //done function is used to tell passport that we are done with the changes and now proceed further 
                    // by passing null as err and the exsisiting user as the second parameter to proceed 

                    done(null, exsistingUser); 
                }
                else{
                    //crete user instance for new user
                    new User({
                        googleId: profile.id
                    }).save()
                      .then( user => done(null,user));
                }
                })
           
    })
);   