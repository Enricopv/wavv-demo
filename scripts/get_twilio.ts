import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const MessagingResponse = twilio.twiml.MessagingResponse;

client.messages
  .get("SM6550c3ada5c144e0b27f0c464794d668").fetch((response) => {

    console.log('response', response)
  })

