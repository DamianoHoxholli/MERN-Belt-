const Pets = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/pets', Pets.allPets);
    app.post('/api/pets', Pets.addPet);
    app.get('/api/pets/:_id', Pets.getPet);
    app.put('/api/pets/:_id', Pets.editPet);
    app.delete('/api/pets/:_id', Pets.adoptPet);

}