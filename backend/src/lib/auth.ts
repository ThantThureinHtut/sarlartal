// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../../prisma/lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  // allow requests from your Next.js frontend
  trustedOrigins: [process.env.FRONTEND_URL!],

  // enable email + password login
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },

  user: {
    additionalFields: {
      status: {
        type: "string",
        defaultValue: "OFFLINE",
      },
      bio: {
        type: "string",
        required: false,
      },
    },
  },
});
