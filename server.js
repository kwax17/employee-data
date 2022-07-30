const express = require('express');
const db = require('./db/connection');
const { init } =  require('./questions/questions')

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    init();
});