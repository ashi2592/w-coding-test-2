const express = require('express');
const { validateBody, validateParams } = require('../middlewares/route');
const {
  createPet,
  getPets,
  getPetDetails,
  deletePet
} = require('../controller/pets');

const {
  createPetSchema,
  getPetsSchema,
  getPetDetailSchema,
  deletePetSchema
} = require('../validators/pet')


const router = express.Router();

router.post('/', validateBody(createPetSchema, { stripUnknown: true }), createPet);
// router.get('/', validateParams(getPetsSchema, {}), getPets);
router.get('/:name', validateParams(getPetDetailSchema, {}), getPetDetails);
router.delete('/:name', validateParams(deletePetSchema, {}), deletePet);


module.exports = router;