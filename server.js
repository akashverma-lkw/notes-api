// server.js
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Connect to DB
connectDB();

app.use(express.json()); // Parse incoming JSON

// Routes
app.use('/', authRoutes);
app.use('/', noteRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Notes API is running!');
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
