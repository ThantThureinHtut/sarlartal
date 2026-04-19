"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config(); // load .env file
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_1 = require("better-auth/node");
const auth_1 = require("./src/lib/auth");
const app = (0, express_1.default)();
// 1. CORS first — allow your Next.js frontend
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true // ← REQUIRED for cookies to work cross-origin
}));
// 2. Better Auth handler — BEFORE express.json()
app.all("/api/auth/{*any}", (0, node_1.toNodeHandler)(auth_1.auth));
// 3. express.json() AFTER auth handler
app.use(express_1.default.static("public")); // serve static files from "public" directory
app.use(express_1.default.json());
// 4. Your protected routes go here (see Part 3)
app.listen(3001, () => {
    console.log("Express running on http://localhost:3001");
});
//# sourceMappingURL=app.js.map