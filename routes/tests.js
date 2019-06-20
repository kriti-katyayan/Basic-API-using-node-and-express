const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose')
const Product = require('../models/test');

router.get( '/', (req, res, next) => {
   res.status(200).json({
       message: 'Handling test GET requests'
   }); 
});

 module.exports =router;