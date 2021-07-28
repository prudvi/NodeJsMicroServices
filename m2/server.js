const express = require('express')

const app = express();
const port = process.env.PORT || 3001;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const routes = require('./api/routes');
routes(app);
app.listen(port, function() { 
      console.log('Server started on port: ' + port);
});
