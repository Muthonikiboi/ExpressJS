import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./Routes/userRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/v1/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`[server]: Server TypeScript is running at http://localhost:${port} 🎉🎉🎉🎉🎉`);
});
