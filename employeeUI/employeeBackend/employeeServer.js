const express        = require('express');
const bodyParser     = require('body-parser');
const employeeServiceApp = express();

const dbConnection = require('./config/mongo_db_connection');
const appConf =  require('./config/application_config');
const routes = require('./routes');


employeeServiceApp.use(express.static(__dirname + '/public')); 
employeeServiceApp.use(bodyParser.json());
employeeServiceApp.use(bodyParser.urlencoded({ extended: true }));
routes(employeeServiceApp);

dbConnection.connectToServer( function( err, client ) {
  if (err)  { console.error('error:In Connecting Mongo DB Server::', err); return; }
  console.log(" database Connection Success ful");
  
  employeeServiceApp.listen(appConf.server_port, () => {
    console.log('We are live on ' + appConf.server_port);
  });       

} );
