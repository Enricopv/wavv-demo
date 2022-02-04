import twilio from "twilio";

const accountSid ="AC08d97a2bdb942feee45b409adecc567a";
const authToken = "3eaf43a0800b6bd59e4d1e05c1864840";

const client = twilio(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+19032963527",
    to: "+18052312053",
  })
  .then((message: { sid: string }) => console.log(message.sid));
