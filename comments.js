// Create web server
// Create a simple web server using Node.js and Express.js
// Import the Express.js module and create an Express application
const express = require('express');
const app = express();
// Create a route for GET requests to the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});