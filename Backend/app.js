import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

// Load .env file
dotenv.config({ path: "./config/config.env" });

// CORS setup for frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", 
  methods: ["POST"],
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

// API Routes
app.use("/api/v1/reservation", reservationRouter);

// Connect to DB
dbConnection();

// Error handler
app.use(errorMiddleware);

export default app;
