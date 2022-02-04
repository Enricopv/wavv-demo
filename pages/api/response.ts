// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

twilio(accountSid, authToken);

type Data = {
  name: string;
};

interface MessageContent {
  account_sid: string;
  api_version: string;
  body: string;
  date_created: string;
  date_sent: string;
  date_updated: string;
  direction: string;
  error_code: null;
  error_message: null;
  from: string;
  messaging_service_sid: string;
  num_media: string;
  num_segments: string;
  price: null;
  price_unit: null;
  sid: string;
  status: string;
  subresource_uris: {
    media: string;
  };
  to: string;
  uri: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body: MessageContent = req.body as MessageContent;

  console.log("body", body);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end("end");
}
