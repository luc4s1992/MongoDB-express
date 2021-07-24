var mongoose = require('mongoose'),   
    uri = 'mongodb://localhost:27017/testDB',
    express = require('express'),
    app = express();

mongoose.connect(uri).then(
  () => { console.log('mongoose connect successfully')},
  err => { throw(err) }
);

var server = app.listen( process.env.PORT || 3500, function(){
  console.log('Listening on port ' + server.address().port);
});

module.exports = server