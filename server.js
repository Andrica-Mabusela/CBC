const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const dotenv = require('dotenv')
const path = require('path')


dotenv.config({path: './config.env'})

const PORT = process.env.PORT || 3000

// Middleware
app.use(express.static('public') )


app.use( express.json() )

// routes
app.use('/', require('./routes/index'))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))