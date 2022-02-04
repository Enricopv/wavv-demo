import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const files = await prisma.file.findMany({
    where: {
      userId: { equals: 1 },
    },
  });
  res.json({ data: files });
}
