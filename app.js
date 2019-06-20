const express = require('express');
const app=express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

const testRoutes= require('./routes/tests');


//create an express application  

mongoose.connect('mongodb://localhost/abc');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
 

router.get( '/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling initial get requests'
    }); 
 });


app.use(( req, res, next ) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if( req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Delete','PUT,POST,PATCH,DELETE');
        return res.status(200).json({});
    } 
})

//middlewares
//routes which should handle requests
app.use( '/tests', testRoutes);    



app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});


app.use((error, req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
});
//module exports

module.exports = app; 
