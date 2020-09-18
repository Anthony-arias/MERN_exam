const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },

    type: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters long"]
    },

    description: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be at least 3 characters long"]
    },

    skillOne: {type: String, default: "Nothing" },

    skillTwo: {type: String, default: "Nothing" },

    skillThree: {type: String, default: "Nothing"}

}, { timestamps: true });

PetSchema.plugin(uniqueValidator, { message: "Name must be unique" });

/*PetSchema.pre('updateOne', function (next) {
    this.options.runValidators = true;
    next();
})*/

module.exports.Pet = mongoose.model('Pet', PetSchema);
