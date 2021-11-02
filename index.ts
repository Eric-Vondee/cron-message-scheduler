import express from "express";
import cron from 'node-cron';
import {EmailService} from './services/email-service';
import {EmailInfo, SmsInfo} from './types';
import {SmsService} from './services/sms-service';

const app = express();
const PORT = process.env.PORT || 3000;

const emailService = new EmailService();
const smsService = new SmsService();

app.use(express.json())
app.use(express.urlencoded({limit: '50mb', extended: true}))


const emailInfo:EmailInfo = {
    subject:"CRON JOB",
    text: "Hi Wagwan",
    recipient: "josh@example.com"
}

const smsInfo:SmsInfo = {
    message: "Hi Wagwan",
    recipient: "234*********"
}
cron.schedule('*/1 * * * *', () => {
    //emailService.sendEmail(emailInfo)
    smsService.sendSms(smsInfo)
});

app.listen(PORT, ()=> console.log(`Cron Job Schedler server started on port ${PORT}`))

