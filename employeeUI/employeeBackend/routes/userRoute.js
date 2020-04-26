var mongoUtil = require( '../config/mongo_db_connection' );

module.exports = function(app ) {
    app.get('/usersList', (req, res) => {
        console.log("user List"+db);
        let db = mongoUtil.getDatabaseName();
        db.collection("users").find().toArray(function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while fetching list from DB' }); 
            } else {
                res.send(result);
            }
        });
    });

    app.post('/user', (req, res) => {
        const user = req.body;
        let db = mongoUtil.getDatabaseName();
        db.collection('users').insertOne(user, (err, result) => {
            if (err) { 
              res.send({ 'error': 'An error has occurred while saving into DB' }); 
            } else {
              res.send(result.ops[0]);
            }
        });
    });

    app.get('/user/:id', (req, res) => {
        var query = { userCode: req.params.id };
        let db = mongoUtil.getDatabaseName();
        db.collection("users").find(query).toArray(function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while fetching into DB' }); 
            } else {
                res.send(result);
            }
           
        });
        
    });

    app.delete('/user/:id', (req, res) => {
        var query = { userCode: req.params.id };
        let db = mongoUtil.getDatabaseName();
        db.collection("users").deleteOne(query, function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred while deleeting from DB' }); 
            } else {
                res.send(result);
            }
        });
    });

    app.post('/user/:id', (req, res) => {
        var query = { userCode: req.params.id };
        let db = mongoUtil.getDatabaseName();
        //let newuser = req.body;
        let newObj = { $set: {
                            "userId": req.body.userId,
                            "firstName": req.body.firstName,
                            "lastName": req.body.lastName,
                            "preferredFullName":req.body.preferredFullName,
                            "phoneNumber": req.body.phoneNumber
                    }};
        db.collection("users").updateOne(query,newObj , function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred newObj deleeting from DB' }); 
            } else {
                res.send(result);
            }
        });
    });
};