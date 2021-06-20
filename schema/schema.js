const graphql = require ('graphql');
const _ = require ('lodash');

const {GraphQLObjectType,GraphQLString,GraphQLInt} = graphql

const users = [
    {"id":"1", "firstname": "Mercy", "secondname": "Mukoya", "efficiencydelta": "1.3", "npsdelta": "1.2", "efficiency": 96, "reportedissues":"3", "age":20},
    {"id":"2", "firstname": "Kennedy", "secondname": "Ayako", "efficiency delta": "1.8", "nps delta": "1.8", "efficiency": 92, "reported issues":"6", "age":20},
    {"id":"3", "firstname": "Stephanie", "secondname": "Tomsett", "efficiency delta": "2.7", "nps delta": "2.0", "efficiency": 58, "reported issues":"1", "age":30},
    {"id":"4", "firstname": "Faith", "secondname": "Kityo", "efficiency delta": "2.8", "nps delta": "2.5", "efficiency": 74, "reported issues":"8", "age":42},

]

const UserType = new graphql.GraphQLObjectType({
name: 'User',
fields:{
    id:{type:GraphQLString},
    firstname:{type:graphql.GraphQLString},
    secondname:{type:graphql.GraphQLString},
    efficiencydelta:{type:graphql.GraphQLString},
    npsdelta:{type:graphql.GraphQLString},
    efficiency:{type:graphql.GraphQLInt},
    reportedissues:{type:graphql.GraphQLInt},
    age:{type:graphql.GraphQLInt},

}
})

const visits = [
    {"location": "Kiambu", "hospital": "Matter Hospital", "times": 7 },
    {"location": "Mukurukwaruben", "hospital": "Mukuru Referral", "times": 12 },
    {"location": "Babadogo", "hospital": "Level 5", "times": 38 },
    {"location": "Kosovo", "hospital": "Clinic Kosovo", "times": 4 },
    {"location": "Mukurukwaruben", "hospital": "Mukuru level5", "times": 26 }
] 

const VisitType = new graphql.GraphQLObjectType({
    name: 'Visit',
    fields:{
        location:{type:graphql.GraphQLString},
        hospital:{type:graphql.GraphQLString},
        times:{type:GraphQLInt},
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
        },

        visit: {
            type: VisitType,
            args: {location:{type:GraphQLString}},
            resolve(parentvalue,args){
                return _.find(visits,{location:args.location})
            }
        }
    }
})



module.exports = new graphql.GraphQLSchema({
    query:RootQuery
})

