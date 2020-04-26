
 userId;
 firstName;
 lastName;
 preferredFullName;
 employeeCode;
 region;
 phoneNumber;
 emailAddress;
 jobTitleName;
var employeeSchema = new mongoose.Schema({
    userId: {
      type: String
    },
    firstName: { type: String}, 
    lastName: { type: String}, 
    preferredFullName: {
        type: String
    },
    employeeCode: { type: String}, 
    region: {
        type: String
    },
    phoneNumber: { type: String },
    emailAddress: { type: String }, 
    jobTitleName: { type: String }
  });

module.exports = {
    employeeSchema: employeeSchema
}