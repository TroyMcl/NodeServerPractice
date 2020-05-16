const express = require('express');
const app = express();

const port = 3000;
const {
  getAllUsers,
  getUserByName,
  addUser,
  updateUser,
  deleteUser } = require('./database/controllers');

app.get('/users', (req, res) => {

});

app.post('/users', (req, res) => {

});

app.patch('/users', (req, res) => {

});

app.delete('/users', (req, res) => {

});

app.listen(port, () => console.log(`App server is listening on port: ${port}`))