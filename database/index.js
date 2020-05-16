const mysql = require('mysql')

const connection = mysql.createConnection({
  host : 'localhost',
  user: 'root',
  password: null,
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting to db', err);
  } else {
    console.log('Connected to DataBase')
  }
});

module.exports = connection;