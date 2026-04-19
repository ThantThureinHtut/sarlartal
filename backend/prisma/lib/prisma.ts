import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";
// step 1 — get the URL
const connectionString = `${process.env.DATABASE_URL}`;

// step 2 — make the connection using the URL
const adapter = new PrismaPg({ connectionString });

// step 3+4 — connection is made, put it into the client and use
const prisma = new PrismaClient({ adapter });
export { prisma };
