const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carOwnerSchema = new Schema({
    id:{
        type:Number

    },
      firstname:{
          type:String
      },
      lastname:{
          type:String
      },
      email: {
          type: String
      },
    country: {
        type: String
    },
    carModel: {
        type: String
    },
    carModelYear: {
        type: String
    },
    carColor: {
        type: String
    },
    gender: {
        type: String
    },
    jobTitle: {
        type: String
    },
    bio: {
        type: String
    },


    },
    {timestamps:true});
module.exports = mongoose.model('CarOwner', carOwnerSchema);