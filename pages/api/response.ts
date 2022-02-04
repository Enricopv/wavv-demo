// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const accountSid = "AC08d97a2bdb942feee45b409adecc567a";
const authToken = "3eaf43a0800b6bd59e4d1e05c1864840";

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
