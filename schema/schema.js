const graphql = require ('graphql');
const _ = require ('lodash');

const {GraphQLObjectType,GraphQLString,GraphQLInt} = graphql

const users = [
    {"id":"0702644583", "firstname": "Cherryl", "age":20},
    {"id":"0115068741", "firstname": "Virsail", "age":20},

]

const UserType = new graphql.GraphQLObjectType({
name: 'User',
fields:{
    id:{type:GraphQLString},
    firstname:{type:graphql.GraphQLString},
    age:{type:graphql.GraphQLInt},

}
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id:{type:GraphQLString}},
            resolve(parentvalue,args){
                return _.find(users,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})