const graphql = require ('graphql');
const _ = require ('lodash');

const {GraphQLObjectType,GraphQLString} = graphql

const users = [
    {"id":"0702644583", "firstname": "Cherryl", "age":20},
    {"id":"0115068741", "firstname": "Virsail", "age":20},

]

const UserType = new graphql.GraphQLObjectType({
name: 'User',
fields:{
    id:{type:GraphQLString}
    
}
})