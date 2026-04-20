import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: "http://localhost:3001"   // your Express URL
})

// export individual functions for easy use
export const {
  signUp,
  signIn,
  signOut,
  useSession,
  getSession
} = authClient