const express = require('express');
const app = express();
const port = 10523;

// Simple in-memory counter
let count = 0;

// Route to increment the count
app.get('/add-count', (req, res) => {
    count += 1;
    res.json({ count: count });
});

// Route to decrement the count
app.get('/subtract-count', (req, res) => {
    count -= 1;
    res.json({ count: count });
});

// Start the server and listen on all available interfaces (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running and accessible on http://13.202.127.159:${port}`);
});
