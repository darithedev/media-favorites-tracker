import express from 'express';

// Create express app instance (the server)
const app = express();

// Middleware to parse json (of incoming requests)
app.use(express.json());

app.listen(3000); // starts the server

// Checks server is running 
app.get('/', async (req, res) => {
    res.json({ message: "Server is healthy"})
});

// Get a random movie review for the selected movie using an open and free api