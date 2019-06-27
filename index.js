const express = require('express');  //import express using require because node doesn't support import express from express 

const app = express(); //initialize express object as app, all the router we create in future will use express using this app object


app.get('/', (req, res) => {    //express route handler to get data
    res.send({hi:'there, I am testing the second deployment'});
});

const PORT = process.env.PORT || 5000;  //define PORT to run on heroku production env as well at 5000 for dev env
app.listen(PORT);   //listen this app at localhost port 5000
