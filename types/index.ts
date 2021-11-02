export interface SmsInfo{
    message: string;
    recipient: string;
}

export interface EmailInfo{
    recipient:string;
    template?: string;
    subject: string;
    text?:string
}

export type SendSms = (smsInfo: SmsInfo) => Promise<any>;
export type SendEmail = (emailInfo: EmailInfo) => Promise<any>;