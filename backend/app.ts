require("dotenv").config()  // load .env file
import express from "express"
import cors from "cors"
import { toNodeHandler, fromNodeHeaders } from "better-auth/node"
import { auth } from "./src/lib/auth"

const app = express()

// 1. CORS first — allow your Next.js frontend
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true    // ← REQUIRED for cookies to work cross-origin
}))

// 2. Better Auth handler — BEFORE express.json()
app.all("/api/auth/{*any}", toNodeHandler(auth))

// 3. express.json() AFTER auth handler
app.use(express.static("public"))  // serve static files from "public" directory
app.use(express.json())

// 4. Your protected routes go here (see Part 3)

app.listen(3001, () => {
  console.log("Express running on http://localhost:3001")
})