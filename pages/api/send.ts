import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = twilio(accountSid, authToken);
  const message = await client.messages.create({
    body: "env files",

    from: "+19032963527",
    to: "+18052312053",
  });

  console.log(message?.sid);

  res.json({ message: "done" });
}
