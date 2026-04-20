require("dotenv").config()  // load .env file
import express from "express"
import cors from "cors"
import { toNodeHandler, fromNodeHeaders } from "better-auth/node"
import { auth } from "./src/lib/auth"
import apiRouter from "./src/routes/api"
import { apiMiddleware } from "./src/routes/middleware/apimiddleware"
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
// if is use without "/uploads" , the url show /photo.png 
// if i use with "/uploads" , the url show /uploads/photo.png and it work fine
app.use("/uploads", express.static("public/uploads"))  // serve static files from "public/uploads" directory
app.use(express.json())
app.use('/api' , apiMiddleware, apiRouter)
// 4. Your protected routes go here (see Part 3)

app.listen(3001, () => {
  console.log("Express running on http://localhost:3001")
})