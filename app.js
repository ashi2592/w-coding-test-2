const express = require('express');
const routes = require('./routes');
const { ValidationError, NotFoundError } = require('./lib/errors');

const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const port = 27017;


const app = express();

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
dbSetup =async () =>{
    await mongoose.connect(`mongodb://localhost/test`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected")
}
app.use(express.json({ limit: '100kb' }));
app.use('/', routes);
app.use('/', (err, req, res, next) => {
  // default to 500 internal server error unless we've defined a specific error
  let code = 500;
  if (err instanceof ValidationError) {
    code = 400;
  }
  if (err instanceof NotFoundError) {
    code = 404;
  }
  res.status(code).json({
    message: err.message,
  });
});

module.exports = app;