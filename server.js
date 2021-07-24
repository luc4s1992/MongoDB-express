var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    app = express(),
    router = require('./routes'),
    server = require('./utils/db')

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/', router);
// finally, let's start our server...
  app.listen(server)

