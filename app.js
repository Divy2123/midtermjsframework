// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 

// Routes
const homeRoute = require('./routes/home');
const studentRoute = require('./routes/student');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

app.use('/', homeRoute);
app.use('/student', studentRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);

// Connect to MongoDB
mongoose.connect('mongodb+srv://divypatel2123:Divy@2123@cluster0.qju1ysm.mongodb.net/studentData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.set('view engine', 'pug'); 

module.exports = app;