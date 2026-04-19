"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
// src/lib/auth.ts
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const prisma_2 = require("../../prisma/lib/prisma");
exports.auth = (0, better_auth_1.betterAuth)({
    database: (0, prisma_1.prismaAdapter)(prisma_2.prisma, {
        provider: "postgresql",
    }),
    // allow requests from your Next.js frontend
    trustedOrigins: [process.env.FRONTEND_URL],
    // enable email + password login
    emailAndPassword: {
        enabled: true,
        autoSignIn: true, // auto sign in after register
    },
});
//# sourceMappingURL=auth.js.map