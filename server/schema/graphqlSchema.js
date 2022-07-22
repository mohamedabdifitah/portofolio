import { createServer } from '@graphql-yoga/node' 
import { ProjectType } from "./projectGraphql.js"
import project from "../models/projectSchema.js"

import {
  buildSchema ,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLEnumType } from 'graphql';

const data ={
    id:"",
    url:"",
    link:"",
    title:"",
    descript:"",
    image:"",
    status:"",
    techStack:["python","js"],
    pages:[
      {
        image:"",
        title:"",
        descript:""
      }
      
    ]
  
  
}
//console.log(ProjectType._fields())
const root = new GraphQLObjectType({
  name:"RootQueryType",
  fields:{
    Projects:{
      type: new GraphQLList(ProjectType),
      resolve(parent,args,ctx) {
        return project.find({})
      }
    },
    Project:{
      type:ProjectType,
      args:{id:{type:GraphQLString}},
      resolve(parent,args,ctx){
        return project.findById(args.id)
      }
    },
    hello:{
      type:GraphQLString,
      resolve(parent,args,ctx){
        return "bastaradii "
      }
      
    }
  }
})
const schema = new GraphQLSchema({
  query:root,
})
export const graphqlServer = createServer({
  schema
}) 
