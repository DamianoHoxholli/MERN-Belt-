const Pet = require("../models/Pet.model");

class PetController {
    addPet(req, res){
        const newpet = new Pet(req.body);
        newpet.save()
            .then( () => res.json(newpet))
            .catch(errors => res.json(errors));
    }
    allPets(req,res){
        Pet.find({}).sort({petType: 1})
            .then( pet => res.json(pet))
            .catch(errors => res.json(errors));
    }
    getPet(req,res){
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(errors => res.json(errors))
    }
    editPet(req,res){
        Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({msg: "Updated"}))
            .catch(errors => res.json(errors))
    }
    adoptPet(req,res){
        Pet.deleteOne({_id: req.params._id})
            .then( () => res.json({msg: "Adopted/Deleted"}))
            .catch(errors => res.json(errors))
    }

}
module.exports = new PetController();