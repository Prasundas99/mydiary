import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 6969,
    secure: false,
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,     
    },
     tls:{
        rejectUnauthorized:false
    }
});

export {transporter};