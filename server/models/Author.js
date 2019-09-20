let mongoose = require('mongoose');
let uniqueValid = require('mongoose-unique-validator'); // oooo mongoose unique valids!!
let Schema = mongoose.Schema;

let authorSchema = new Schema({
    name: {
        type: String,
        trim: true,
        //unique: true, // unique? TRUE?
        required: [true, "You need to enter a name for your author"],
        minlength: [3, "Name must be at least 3 characters long"]
    },

}, {
    timestamps: true
});

// we can attach unique valid as a plugin to make any field unique
authorSchema.plugin(uniqueValid, {
    message: `{PATH} must be unique!`
});

// make the model
mongoose.model('Author', authorSchema);