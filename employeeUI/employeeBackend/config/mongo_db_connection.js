const mongoClient = require( 'mongodb' ).MongoClient;
const appConf =  require('./application_config.dev');

var database;

module.exports = {
  connectToServer: function( callback ) {
    mongoClient.connect( appConf.db_url,  { useNewUrlParser: true }, function( err, client ) {
        if (err) throw new Error(" Failed to Connect MongoDB ");
        database  = client.db('employeeDB');
        return callback( err );
    });
  },

  getDatabaseName: function() {
      return database;
  }
};