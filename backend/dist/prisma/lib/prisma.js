"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../../generated/prisma/client");
// step 1 — get the URL
const connectionString = `${process.env.DATABASE_URL}`;
// step 2 — make the connection using the URL
const adapter = new adapter_pg_1.PrismaPg({ connectionString });
// step 3+4 — connection is made, put it into the client and use
const prisma = new client_1.PrismaClient({ adapter });
exports.prisma = prisma;
//# sourceMappingURL=prisma.js.map