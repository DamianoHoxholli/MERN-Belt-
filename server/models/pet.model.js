const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters'],
        unique:true
    },
    petType: {
        type: String,
        required:[true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters"]
    },
    petDesc: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    petSkill1: {
        type: String,

    },
    petSkill2: {
        type: String,

    },
    petSkill3: {
        type: String,

    },
    
}, {timestamps: true});

PetSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Pet", PetSchema);