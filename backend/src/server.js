import express from 'express';
import notesRoutes from './routes/notesRoutes.js'; // Adjusted import path
import connectDB from './config/db.js';
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5010;

connectDB();

app.use('/api/notes', notesRoutes)

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
})


// mongodb+srv://netcodensazzadali:258793@cluster0.iusiisb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0