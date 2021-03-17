const Joi = require('@hapi/joi');
// CREATE PET
const createPetSchema = Joi.object().keys({
    name: Joi.string().required().description('Pets name'),
    age: Joi.number().integer().required().description('Pets age'),
    colour: Joi.string().required().description('Pets colour')
});

// GET PET
const getPetsSchema = Joi.object().keys({
})

// GET PET DETAILS
const getPetDetailSchema = Joi.object().keys({
    name: Joi.string().required().description('Pet name')
})

// DELETE PET
const deletePetSchema = Joi.object().keys({
    name: Joi.string().required().description('Pet name')
})


module.exports = {
    createPetSchema,
    getPetsSchema,
    getPetDetailSchema,
    deletePetSchema
}