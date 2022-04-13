const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res
        .status(200)
        .json('Show all bootcamps')
})
app.post('/api/v1/bootcamps', (req, res) => {
    res
        .status(200)
        .json({success: true, msg:'Create new bootcamp'})
})
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res
        .status(200)
        .json( {success: true, msg: `Update bootcamp ${req.params.id} `})
})
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res
        .status(200)
        .json({success: true, msg: `Delete bootcamp ${req.params.id} `})
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `))