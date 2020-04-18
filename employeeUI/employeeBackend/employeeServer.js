const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const employeeServiceApp = express();
employeeServiceApp.use(express.static(__dirname + '/public')); 
const db             = require('./config/mongodb_config');

const port = 8000;

//employeeServiceApp.use(express.bodyParser());
employeeServiceApp.use(bodyParser.json());
employeeServiceApp.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, {useNewUrlParser: true}, (err, database) => {
    if (err) return console.log('error:::', err);
    // Make sure you add the database name and not the collection name
    let dbCon = database.db("employeeDB")
    require('./routes')(employeeServiceApp, dbCon);
    employeeServiceApp.listen(port, () => {
      console.log('We are live on ' + port);
    });               
})

//require('./routes')(employeeServiceApp, {});

// employeeServiceApp.listen(port, () => {
//   console.log('We are live on ' + port);
// });