const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cnic: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    imgURL: { type: String },
    profession: { type: String, required: true },
    income: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
