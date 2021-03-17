const app = require('./app')

const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const port = 27017;


// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

dbSetup =async () =>{

    await mongoose.connect(`mongodb://localhost/test`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected")
}


app.listen(3400,()=>{
    dbSetup()
    console.log("code is running very fast")
})