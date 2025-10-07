import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();



app.use(cors({
    origin: "http://localhost:5173",
}));
app.use("/api/notes", notesRoutes);
app.use(express.json());
app.use(rateLimiter);

connectDB().then(() => {
    app.listen(5001, () => console.log('Server is running on port 5001'));
});