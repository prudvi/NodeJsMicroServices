const express        = require('express');
const bodyParser     = require('body-parser');
const employeeServiceApp = express();

const dbConnection = require('./config/mongo_db_connection');
const appConf =  require('./config/application_config');
const routes = require('./routes');
var logger = require('./config/logger');

employeeServiceApp.use(express.static(__dirname + '/public')); 
employeeServiceApp.use(bodyParser.json());
employeeServiceApp.use(bodyParser.urlencoded({ extended: true }));
routes(employeeServiceApp);

dbConnection.connectToServer( function( err, client ) {
  if (err)  { logger.logger.error('error:In Connecting Mongo DB Server::', err); return; }
  
  employeeServiceApp.listen(appConf.server_port, () => {
    logger.logger.info('We are live on ' + appConf.server_port);
  });       

} );
