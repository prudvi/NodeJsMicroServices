var mongoUtil = require( '../config/mongo_db_connection' );

module.exports = function(app ) {
    app.get('/employeesList', (req, res) => {
        console.log("Employee List"+db);
        var db = mongoUtil.getDatabaseName();
        db.collection("employees").find().limit(10).sort({_id: -1}).toArray(function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while fetching list from DB' }); 
            } else {
                res.send(result);
            }
        });
    });

    app.post('/employee', (req, res) => {
        const employee = req.body;
        var db = mongoUtil.getDatabaseName();
        db.collection('employees').insertOne(employee, (err, result) => {
            if (err) { 
              res.send({ 'error': 'An error has occurred while saving into DB' }); 
            } else {
              res.send(result.ops[0]);
            }
        });
    });

    app.get('/employee/:id', (req, res) => {
        var query = { employeeCode: req.params.id };
        var db = mongoUtil.getDatabaseName();
        db.collection("employees").find(query).toArray(function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while fetching into DB' }); 
            } else {
                res.send(result);
            }
           
        });
        
    });

    app.delete('/employee/:id', (req, res) => {
        var query = { employeeCode: req.params.id };
        var db = mongoUtil.getDatabaseName();
        db.collection("employees").deleteOne(query, function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while deleeting from DB' }); 
            } else {
                res.send(result);
            }
        });
    });

    app.post('/employee/:id', (req, res) => {
        var query = { employeeCode: req.params.id };
        var db = mongoUtil.getDatabaseName();
        //let newEmp = req.body;
        let newObj = { $set: {
                            "userId": req.body.userId,
                            "jobTitleName": req.body.jobTitleName,
                            "firstName": req.body.firstName,
                            "lastName": req.body.lastName,
                            "preferredFullName":req.body.preferredFullName,
                            "region": req.body.region,
                            "phoneNumber": req.body.phoneNumber,
                            "address": req.body.address 
                    }}
        db.collection("employees").updateOne(query,newObj , function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred newObj deleeting from DB' }); 
            } else {
                res.send(result);
            }
        });
    });
};