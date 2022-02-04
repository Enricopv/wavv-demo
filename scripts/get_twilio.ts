import twilio from "twilio";

const accountSid = "AC08d97a2bdb942feee45b409adecc567a";
const authToken = "3eaf43a0800b6bd59e4d1e05c1864840";

const client = twilio(accountSid, authToken);

const MessagingResponse = twilio.twiml.MessagingResponse;

client.messages
  .get("SM6550c3ada5c144e0b27f0c464794d668").fetch((response) => {

    console.log('response', response)
  })

