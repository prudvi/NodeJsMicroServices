const express        = require('express');
const bodyParser     = require('body-parser');
const employeeServiceApp = express();

const dbConnection = require('./config/mongo_db_connection');
let environment =  '';

let args = process.argv;
if (args.length == 3 ) {
  let env = args[2];
  environment = env.split("=")[1];
}
    

  console.log("::environment:::"+environment);

const appConf =  require('./config/application_config.'+environment);
const routes = require('./routes');
var logger = require('./config/logger');

employeeServiceApp.use(express.static(__dirname + '/public')); 
employeeServiceApp.use(bodyParser.json());
employeeServiceApp.use(bodyParser.urlencoded({ extended: true }));
routes(employeeServiceApp);

dbConnection.connectToServer( function( err, client ) {
  if (err)  { logger.logger.error('error:In Connecting Mongo DB Server::', err); return; }
  
  employeeServiceApp.listen(appConf.server_port, () => {
    logger.logger.info(appConf.JWT_SECRET+':::We are live on ' + appConf.server_port);
  });       

} );
