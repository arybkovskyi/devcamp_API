const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

//route files
const bootcamps = require('./routes/bootcamps')

dotenv.config({path: './config/config.env'});

//connect database
connectDB()

const app = express();

//dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.PORT

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `))

//handle unhandled rejections
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`)
    //close server and exit process
    server.close(() =>{
        process.exit(1)
    })
})