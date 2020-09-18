const { Pet } = require('../models/pet.model');
const { request, response } = require('express');

module.exports.getAllPets = (request, response) => {
    Pet.find({}).sort({ type: 1 })
        .then(Pets => { response.json(Pets) })
        .catch(err => response.json(err));
}

module.exports.createPet = (request, response) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = request.body;
    Pet.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.getPet = (request, response) => {
    Pet.findOne({ _id: request.params.id })
        .then(oneSinglePet => response.json(oneSinglePet))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.updatePet = (request, response) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = request.body;
    Pet.updateOne({ _id: request.params.id }, {
        name: name,
        type: type,
        description: description,
        skillOne: skillOne,
        skillTwo: skillTwo,
        skillThree: skillThree
    })
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}