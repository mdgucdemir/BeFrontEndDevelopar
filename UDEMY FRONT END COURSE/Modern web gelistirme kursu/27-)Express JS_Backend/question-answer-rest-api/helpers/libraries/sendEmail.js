
// Reset Password Token i kullaniciya mail olarak atmak icin [ NODEMAILER ] yapisindan yararlaniyoruz burada

const nodemailer = require("nodemailer");

const sendEmail = async(mailOptions) => {

    let transportre = nodemailer.createTransport({

        host : process.env.SMTP_HOST,
        port : process.env.SMPT_PORT,               
        auth : {
            user : process.env.SMPT_USER,
            pass : process.env.SMPT_PASS
        }
    });

    let info = await transportre.sendMail(mailOptions);
    console.log(`Message Sent : ${info.messageId}`);
};

module.exports = sendEmail;