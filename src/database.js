var mysql = require('mysql'); 


var SQLusername = usr;
var SQLpassword = pass;
var SQLip = localhost;




var con = mysql.createConnection({
    host: "",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});