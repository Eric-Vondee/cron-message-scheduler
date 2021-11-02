import mg, {Mailgun} from 'mailgun-js';
import {MAILGUN_DOMAIN_NAME, MAILGUN_EMAIL_KEY, EMAIL_SENDER_NAME} from '../config';
import {SendEmail} from '../types';

export class EmailService {
    constructor(){
       this._mailgun = mg({
            apiKey: MAILGUN_EMAIL_KEY,
            domain: MAILGUN_DOMAIN_NAME
        })
    }

    private _mailgun:Mailgun
    public sendEmail:SendEmail = async({recipient, subject, text,  template}) => {
        try{
            await this._mailgun.messages().send({
                from: EMAIL_SENDER_NAME,
                to: recipient,
                subject: subject,
                template: template,
                text: text
            })
        }
        catch(error){
            console.log(error)
        }
    }
}

export default EmailService;