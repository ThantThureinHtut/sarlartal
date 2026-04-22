import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: process.env.API_URL || "http://localhost:3001",
})

// export individual functions for easy use
export const {
  signUp,
  signIn,
  signOut,
  useSession,
  getSession
} = authClient