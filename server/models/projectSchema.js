import mongoose from 'mongoose';

import uniqueValidator from "mongoose-unique-validator";
const projectSchema = new mongoose.Schema({
  _id:{
    type:String
  },
  url:String,
  link:String,
  title:{
    type:String,
    max:40,
    min:5,
    required: [true, "can't be blank"], 
  },
  descript:{
    type:String,
  },
  image:{
    type:String,
  },
  status:{
    type:String
  },
  techStack:{
    type:[String]
  },
  pages:{
    type:[{
      image:String,
      title:String,
      descript:String,
      
      
    }]
  },
  
},{timestamps: true,_id:false})

projectSchema.plugin(uniqueValidator, {message: 'is already taken.'}); 
export default mongoose.model('project',projectSchema)