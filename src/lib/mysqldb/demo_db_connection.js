var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.205.150",
  user: "admin",
  password: "1234",
  database: "sensores"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query('SELECT * FROM lecturaSuelo', function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
  });
});
