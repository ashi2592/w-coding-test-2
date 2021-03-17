const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: "Name is Required Feild" },
  age: { type: mongoose.Schema.Types.Number, required: "Age is Required Feild" },
  colour: { type: mongoose.Schema.Types.String, required: "Colour is Required Feild" },
});

module.exports = mongoose.model('Pets', PetsSchema);