import Axios, {AxiosInstance} from 'axios';
import {
    SENDCHAMP_BASE_URL, 
    SENDCHAMP_PUBLIC_KEY,
    SENDCHAMP_SENDER_NAME
} from '../config'
import {SendSms} from '../types';
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SENDCHAMP_PUBLIC_KEY}`,
}

export class SmsService {
    constructor(){
        this._smsService = Axios.create({
            baseURL: SENDCHAMP_BASE_URL,
            headers
        })
    }
    private _smsService:AxiosInstance

    public sendSms:SendSms = async({recipient, message}) => {
        try{
            const PATH = 'sms/send'
            const smsData = JSON.stringify({
                to: recipient,
                message: message,
                sender_name: SENDCHAMP_SENDER_NAME
            })
            const data = await this._smsService.post(PATH, smsData)
            console.log(data)
            return data
        }
        catch(error){
            console.log(error)
        }
    }
}

export default SmsService;
