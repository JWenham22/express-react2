const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = 4000;

app.get('/home', (req, res) => {
    res.json({message: 'You are very lonely and will be for a long time Jack because youre a fucking loser and nobody will ever love you'})
});

app.get('/love', (req, res) => {
    res.json({message: 'You are loved by nobody and nobody will ever love you and thats that so deal with it'})
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
});