const graphql = require ('graphql');
const _ = require ('lodash');

const {GraphQLObjectType,GraphQLString,GraphQLInt} = graphql

const users = [
    {"id":"1", "firstname": "Mercy", "secondname": "Mukoya", "efficiency delta": 1.3, "nps delta": 1.2, "efficiency": 96, "reported issues": 3, "age":20},
    {"id":"2", "firstname": "Virsail", "age":20},

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

module.exports = new graphql.GraphQLSchema({
    query:RootQuery
})