const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const path = require('path')


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/homepage.html'))
})


router.post('/', (req, res) => {
    console.log(req.body)


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'andricamabusela1@gmail.com',
        subject: req.body.subject,
        // text: req.body.message,
        html: `Message from ${req.body.email}<br>
                ${req.body.message}
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
            res.send('error')
        }else{
            console.log('Email sent:'+ info.response)
            res.send('success')
        }
    })
})




// export the router
module.exports = router