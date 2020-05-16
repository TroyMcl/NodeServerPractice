const express = require('express');
const app = express();

const port = 3000;
const {
  getAllUsers,
  getUserByID,
  addUser,
  updateUser,
  deleteUser } = require('./database/controllers');

// How do we get a body on our request object?

app.get('/users', (req, res) => {
  console.log('just users')
});

app.get('/users/:id', (req, res) => {
  console.log('here')
});

app.post('/users', (req, res) => {

});

app.patch('/users', (req, res) => {

});

app.delete('/users', (req, res) => {

});

app.listen(port, () => console.log(`App server is listening on port: ${port}`));

// First Go to the database folder. Follow the instructions for connecting to your data base. When done start the server to see if your connection is successful.

// Recommended work flow: Do one route at a time callback function, controller function before moving on to the next. Start with POST, then both GET, PATCH(find the difference between a PUT and a PATCH), DELETE.

// Feel free to use promises, bluebird has been provided to Promisify.

// Extra Work
// After finishing the 5 provided routes: Add a second table to the schema.sql, have it use a foreign key.
// Create a new set of CRUD routes and controllers that uses this new table
