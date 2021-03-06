const passport = require('passport');
module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
        scope:['profile','email']
    })
    );

    app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
        (req, res) =>{
            res.redirect('/surveys');
        }
    );

/*
        Testing Authentication
    Add user modal instance into req object 
    to make server able to understand that this is 
    the same user which is just logged in 
*/
app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    });

/*
    Logout the account by destroying cookie
*/ 
app.get('/api/logout/', (req, res) => {
        req.logout();  //built-in method of passport to kill cookie and logout account
        console.log('auth route logout');
        console.log(res.sessionCookies);
        res.redirect('/'); 
    });
};