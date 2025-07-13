import express from 'express';
import notesRoutes from './routes/notesRoutes.js'; // Adjusted import path

const app = express();

app.use('/api/notes', notesRoutes)

app.listen(5010, () => {
    console.log('Server is running on port 5001');
})
