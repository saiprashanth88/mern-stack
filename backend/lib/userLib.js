const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback) {
    try {
        var users = await userModel.find({isDeleted:false});
        callback(null, users);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.createFirstUser = async function(callback) {
    try {
        var user = {
            userName: "saiprashanth88",
            yearOfGraduation: 2024,
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}
module.exports.createUser = async function(user,callback) {
    try {

        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}
module.exports.updateUser = async function(username,datacallback){
    try{


        var result = await userModel.updateOne(username,data);
        callback(null,result);

    }
    catch(err){
        callback(err,null);
    }
}

module.exports.deleteUser = async function(username,callback){
    try{
        var query = {
            userName: username,
        };

        var result = await userModel.updateOne(query,{isDeleted:true});
        callback(null,result);

    }
    catch(err){
        callback(err,null);
    }
}


module.exports.getUserByFilter = async function(username,callback){
    try{
        var result = await userModel.find(callback);
        callback(null,result);


    }
    catch(err){
        callback(err,null);
    }
}

const toDoModel = require("../models/userModel");
// getAllTodos
// - getTodosByQuery
// - getSingleTodoById
// - createTodo
// - updateTodoById
// - deleteTodoById


module.exports.createToDo = async function(user,callback) {
    try {

        var newUser = new toDoModel(user);
        var result = await newUser.save();
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}
module.exports.updateToDoById = async function(id,datacallback){
    try{


        var result = await toDoModel.updateOne(id,data);
        callback(null,result);

    }
    catch(err){
        callback(err,null);
    }
}

module.exports.deleteToDoById = async function(id,callback){
    try{


        var result = await toDoModel.updateOne(id,{isDeleted:true});
        callback(null,result);

    }
    catch(err){
        callback(err,null);
    }
}
module.exports.getAllTodos = async function(callback) {
    try {
        var users = await toDoModel.find({isDeleted:false});
        callback(null, users);
    } catch (err) {
        callback(err, null);
    }
}
module.exports.getTodosByQuery = async function(id,callback){
    try{
        var result = await toDoModel.find(callback);
        callback(null,result);


    }
    catch(err){
        callback(err,null);
    }
}
