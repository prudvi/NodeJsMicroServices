var mongoUtil = require( '../config/mongo_db_connection' );

module.exports = function(app ) {
    app.post('/insertBulkEmployee', (req, res) => {
        const reqObj = req.body;
        var db = mongoUtil.getDatabaseName();
        let empList = [];
        for (let x=0; x<reqObj.count; x++) {
            var empObj = {
                "userId":"prudvi2k"+x,
                "jobTitleName":"XJCLKHDLApplication Developer "+x,
                "firstName":"Prudvi "+x,
                "lastName":"Raju "+x,
                "preferredFullName":"Arshid Viraj "+x,
                "employeeCode":"E2020 =="+x,
                "region":"Adoni, KDT"+x,
                "phoneNumber":""+x,
                "emailAddress":"raju"+x
            };
            empList.push(empObj);
        }
        
        db.collection('employees').insertMany(empList, (err, result) => {
            if (err) { 
              res.send({ 'error': 'An error has occurred while saving into DB' }); 
            } else {
              res.send({ "message ":" Succes full Inserted all User Docs "});
            }
        });
    });

    app.post('/deleteAllEmployee', (req, res) => {
        const employee = req.body;
        var db = mongoUtil.getDatabaseName();
        db.collection('employees').deleteMany((err, result) => {
            if (err) { 
              res.send({ 'error': 'An error has occurred deleteAllEmployee while deleteing into DB' }); 
            } else {
              res.send({"message" : "All Documents of Employee Deleted"});
            }
        });
    });
};