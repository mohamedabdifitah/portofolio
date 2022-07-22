import {
  buildSchema ,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLEnumType
  
} from 'graphql';

const PageType = new GraphQLObjectType({
  name:"page",
  fields:()=>({
    image:{type:GraphQLString},
    title:{type:GraphQLString},
    descript:{type:GraphQLString}
  })
})

const ProjectType = new GraphQLObjectType({
  name:"Project",
  fields:() =>({
    id:{type:GraphQLString},
    url:{type:GraphQLString},
    link:{type:GraphQLString},
    title:{type:GraphQLString},
    descript:{type:GraphQLString},
    image:{type:GraphQLString},
    status:{type:GraphQLString},
    techStack:{type:new GraphQLList(GraphQLString)},
    pages:{type: new GraphQLList(PageType)}
  })
})
export {ProjectType}