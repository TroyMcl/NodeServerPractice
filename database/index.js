const mysql = require('mysql')
// Step 1) load the schema.sql into your local mysql database
// Step 2) Configure your connection object for your data base - use the npm mysql driver docks to guide you
const connection = mysql.createConnection({

});

connection.connect((err) => {
  if (err) {
    console.log('error connecting to db', err);
  } else {
    console.log('Connected to DataBase')
  }
});

// Step 3) Export your connection object so it is accessable to the rest of your server