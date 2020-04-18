const employeeRoutes = require('./employeRoute');
module.exports = function(app, mdb) {
    employeeRoutes(app, mdb);
  // Other route groups could go here, in the future
};