import express from 'express';

const app = express();
app.listen(5010, () => {
    console.log("Server started on port 5010");
})

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Get Notes
app.get('/api/notes', (req, res) => {
    res.status(200).send('Here are your 5 notes');
});

app.get('/api/users', (req, res) => {
    res.send('You got the users')
})

// Create Note
app.post('/api/notes', (req, res) => {
    res.status(201).send('Note Created');
});

app.post('/api/notes', (req, res) => {
    res.status(201).json({"message": 'Post Created Successfully'})
})

// Update Note
app.put('/api/notes/:id', (req, res) => {
    res.send('Note Updated')
});

app.put('/api/notes/:id', (req, res) => {
    res.status(200).json({"message": "Post Updated Successfully"})
})

// Delete Note
app.delete('./api/notes/:id', (req, res) => {
    res.send('Note Deleted')
})
app.delete('/api/notes/:id', (req, res) => {
    res.status(200).json({"message": "Post Deleted Successfully"})
})