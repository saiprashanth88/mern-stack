const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    yearOfGraduation: { type: Number, min: 2000, max: 9000 },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false }
});
const userModel = mongoose.model("user",userSchema);
module.exports=userModel;


const toDoSchema = new mongoose.Schema({
    title : {type: String, require:true,unique:true},
    isCompleted:{type: Boolean, default:false},
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});
const toDoModel = mongoose.model("user",toDoSchema);
module.exports = toDoModel;
