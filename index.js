import express from 'express';
import db from "./config/database.js";
import teamRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log("Database Connected...");
} catch (error) {
    console.error("Connection Error: ", error);
}

app.use(cors());
app.use(express.json());
app.use('/teams', teamRoutes);

app.listen(5000, () => console.log("Server running on port 5000\nVisit: http://localhost:5000/teams"));