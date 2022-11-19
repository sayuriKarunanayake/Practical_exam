const mongoose = require('mongoose');//require is used to export
const Schema = mongoose.Schema;//schema is the place where attributes stored

//object creation
const userSchema = new Schema({
    //properties declaration
    ID : {
        type : Number,
        required : true,//backend validation
        //unique: true

    },
    name : {
        type : String,
        required : true//backend validation

    },
    
    description : {
        type : String,
        required : true//backend validation

    },
    timeDuration : {
        type : String,
        required : true//backend validation
    },
    parentCard : {
        type : Number,
        required : true//backend validation
    },

    role :{
        type : String,
        required : true//backend validation
    },

    arr : [{
        city : {type: String, required : true},
        province :{type: String, required : true},
        country :{type: String, required : true}
    }]
})

//declare which schema goes to which table
const user = mongoose.model("User",userSchema);//table name,schema created 
module.exports = user;//export the module