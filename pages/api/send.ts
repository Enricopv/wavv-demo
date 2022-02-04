import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  client.messages
    .create({
      body: "bananan",
      from: "+19032963527",
      to: "+18052312053",
    })
    .then((message: { sid: string }) => console.log(message.sid));

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.json({ message: "done" });
}
