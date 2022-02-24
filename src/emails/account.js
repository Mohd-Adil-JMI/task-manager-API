const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'aadil97606@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.Hope you will enjoy using it.`
    })
}
const sendCancellationMail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'aadil97606@gmail.com',
        subject: 'Sad to know that you have unsubscribed!',
        text: `Thank you ${name} for using Services. We will miss you . Feedbacks are welcomed`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationMail
}