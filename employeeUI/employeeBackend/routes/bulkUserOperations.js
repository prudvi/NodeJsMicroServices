var mongoUtil = require( '../config/mongo_db_connection' );

module.exports = function(app ) {
    app.post('/insertBulkUser', (req, res) => {
        const reqObj = req.body;
        var db = mongoUtil.getDatabaseName();
        let userList = [];
        for (let x=0; x<reqObj.count; x++) {
            var userObj = {
                "userId":"prudvi_rkck"+x,
                "firstName":"Reki "+x,
                "lastName":"Reddy "+x,
        
                "phoneNumber":""+x,
                "emailAddress":"raju"+x
            };
            userList.push(userObj);
        }
        
        db.collection('users').insertMany(userList, (err, result) => {
            if (err) { 
              res.send({ 'error': 'An error has occurred while insertMany saving into DB' }); 
            } else {
              res.send( { "message ":" Succes full Inserted all User Docs "});
            }
        });
    });

    app.post('/deleteAllUser', (req, res) => {
        const employee = req.body;
        var db = mongoUtil.getDatabaseName();
        db.collection('users').deleteMany((err, result) => {
            if (err) { 
              res.send({ 'error': 'An error has occurred deleteAllUser while deleteing into DB' }); 
            } else {
              res.send({"message" : "All Documents of Users Deleted"});
            }
        });
    });
};