import dotenv from 'dotenv';
dotenv.config()

export const MAILGUN_EMAIL_KEY=process.env.MAILGUN_EMAIL_KEY || '';
export const MAILGUN_DOMAIN_NAME=process.env.MAILGUN_DOMAIN_NAME || '';
export const SENDCHAMP_PUBLIC_KEY = process.env.SENDCHAMP_PUBLIC_KEY || '';
export const SENDCHAMP_BASE_URL = process.env.SENDCHAMP_BASE_URL|| '';
export const SENDCHAMP_SENDER_NAME = process.env.SENDCHAMP_SENDER_NAME || '';
export const EMAIL_SENDER_NAME = process.env.EMAIL_SENDER_NAME || '';





