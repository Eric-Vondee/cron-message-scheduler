# cron-message-scheduler

```bash
# install dependencies
$ yarn install

# run in development mode
$ yarn run dev

#To build 
$ yarn build

```

### Environment Variables

Create a `.env` file for and add the variables below

- `BASE_URL`: Application's base url. Used mostly with axios
- `MAILGUN_DOMAIN_NAME`: Domain name set on mailgun's server
- `MAILGUN_EMAIL_KEY`: Domain name apikey on mailgun's server
- `SENDCHAMP_BASE_URL`: SendChamp Live Base Url 
- `SENDCHAMP_PUBLIC_KEY`: SendChamp Public Api Key
- `SENDCHAMP_SENDER_NAME`: Sendchamp approved sender name 
- `EMAIL_SENDER_NAME`: Email domain name josh@example.com

