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
  ToCountry: string;
  MediaContentType0: string;
  ToState: string;
  SmsMessageSid: string;
  NumMedia: string;
  ToCity: string;
  FromZip: string;
  SmsSid: string;
  FromState: string;
  SmsStatus: string;
  FromCity: string;
  Body: string;
  FromCountry: string;
  To: string;
  ToZip: string;
  NumSegments: string;
  MessageSid: string;
  AccountSid: string;
  From: string;
  MediaUrl0: string;
  ApiVersion: string;
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

/**
 * {
  ToCountry: 'US',
  MediaContentType0: 'image/jpeg',
  ToState: 'TX',
  SmsMessageSid: 'MM4f1e4a983e7dfe76c0d6df4c918e3613',
  NumMedia: '1',
  ToCity: 'MARSHALL',
  FromZip: '91360',
  SmsSid: 'MM4f1e4a983e7dfe76c0d6df4c918e3613',
  FromState: 'CA',
  SmsStatus: 'received',
  FromCity: 'THOUSAND OAKS',
  Body: 'Venmo me',
  FromCountry: 'US',
  To: '+19032963527',
  ToZip: '75670',
  NumSegments: '1',
  MessageSid: 'MM4f1e4a983e7dfe76c0d6df4c918e3613',
  AccountSid: 'AC08d97a2bdb942feee45b409adecc567a',
  From: '+18052312053',
  MediaUrl0: 'https://api.twilio.com/2010-04-01/Accounts/AC08d97a2bdb942feee45b409adecc567a/Messages/MM4f1e4a983e7dfe76c0d6df4c918e3613/Media/MEd1362f0a148b3445ea7c5884d8725843',
  ApiVersion: '2010-04-01'
}
 */