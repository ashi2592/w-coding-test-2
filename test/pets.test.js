const request = require('supertest');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const app = require('../app');
const expect = chai.expect;

chai.use(chaiAsPromised);

describe('functional - pet', () => {
  it('should fail to create a pet without a name', async () => {
    const res = await request(app).post('/pets').send({
      age: 16,
      colour: 'white',
    });
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('"name" is required');
  });

  it('should fail to create a pet without a age', async () => {
    const res = await request(app).post('/pets').send({
      name: 'Tom',
      colour: 'white',
    });
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('"age" is required');
  });

  it('should fail to create a pet without a colour', async () => {
    const res = await request(app).post('/pets').send({
      name: 'Tom',
      age: 16
    });
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('"colour" is required');
  });

  it('should create a pet', async () => {
    const pet = {
      "name": "Tom",
      "age":3,
      "colour": "white"
    };
    const res = await request(app).post('/pets').send(pet);
    expect(res.status).to.equal(201);
    expect(res.body.name).to.equal(pet.name);
    expect(res.body.age).to.equal(pet.age);
    expect(res.body.colour).to.equal(pet.colour);
  });

  it('should get pets', async () => {
    const pet = {
      "name": "Tom",
      "age":3,
      "colour": "white"
    };

    const res = await request(app).get('/pets/Tom').send(pet);
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal(pet.name);
    expect(res.body.age).to.equal(pet.age);
    expect(res.body.colour).to.equal(pet.colour);
  });


  it('should delete pet', async () => {
    const pet = {
      "message": "successfully deleted"
    };

    const res = await request(app).delete('/pets/Tom').send(pet);
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal(pet.message);

  });

});