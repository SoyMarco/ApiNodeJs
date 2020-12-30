const mysql = require('mysql');

const mySqlCnn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tdprueba',
  multipleStatements: true
});

mySqlCnn.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mySqlCnn;
