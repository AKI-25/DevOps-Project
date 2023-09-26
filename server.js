const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port number

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});