import twilio from "twilio";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = twilio(accountSid, authToken);

client.messages
  .create({
    body: "bananan",
    from: "+19032963527",
    to: "+18052312053",
  })
  .then((message: { sid: string }) => console.log(message.sid));
