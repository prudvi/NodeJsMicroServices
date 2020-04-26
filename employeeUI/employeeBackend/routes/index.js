const employeeRoutes = require('./employeRoute');
const userRoutes = require('./userRoute');
const bulkUserRoutes = require('./bulkUserOperations');
const buldEmployeeRoutes = require('./bulkEmployeOperations');
module.exports = function(app) {
    employeeRoutes(app);
    userRoutes(app);
    buldEmployeeRoutes(app);
    bulkUserRoutes(app);
  // Other route groups could go here, in the future
};