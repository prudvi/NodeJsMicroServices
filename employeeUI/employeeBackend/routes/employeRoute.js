module.exports = function(app, mdb) {
    app.get('/employeesList', (req, res) => {
        console.log("Employee List");
        mdb.collection("employees").find().toArray(function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while fetching list from DB' }); 
            } else {
                res.send(result);
            }
        });
    });

    app.post('/employee', (req, res) => {
        const employee = req.body;
        mdb.collection('employees').insertOne(employee, (err, result) => {
            if (err) { 
              res.send({ 'error': 'An error has occurred while saving into DB' }); 
            } else {
              res.send(result.ops[0]);
            }
        });
    });

    app.get('/employee/:id', (req, res) => {
        var query = { employeeCode: req.params.id };
        mdb.collection("employees").find(query).toArray(function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while fetching into DB' }); 
            } else {
                res.send(result);
            }
           
        });
        
    });

    app.delete('/employee/:id', (req, res) => {
        var query = { employeeCode: req.params.id };
        mdb.collection("employees").deleteOne(query, function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while deleeting from DB' }); 
            } else {
                res.send(result);
            }
        });
    });

    app.post('/employee/:id', (req, res) => {
        var query = { employeeCode: req.params.id };
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
        mdb.collection("employees").updateOne(query,newObj , function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred newObj deleeting from DB' }); 
            } else {
                res.send(result);
            }
        });
    });
};