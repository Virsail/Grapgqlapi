const graphql = require ('graphql');
const _ = require ('lodash');

const {GraphQLObjectType,GraphQLString,GraphQLInt} = graphql

const users = [
    {"id":"1", "firstname": "Mercy", "secondname": "Mukoya",   "efficiency": 96,  "age":20},
    {"id":"2", "firstname": "Kennedy", "secondname": "Ayako",   "efficiency": 92,  "age":20},
    {"id":"3", "firstname": "Stephanie", "secondname": "Tomsett",  "efficiency": 58,  "age":30},
    {"id":"4", "firstname": "Faith", "secondname": "Kityo",  "efficiency": 74,  "age":42},

]

const UserType = new graphql.GraphQLObjectType({
name: 'User',
fields:{
    id:{type:GraphQLString},
    firstname:{type:graphql.GraphQLString},
    secondname:{type:graphql.GraphQLString},
    efficiency:{type:graphql.GraphQLInt},
    age:{type:graphql.GraphQLInt},

}
})

const visits = [
    {"location": "Kiambu", "hospital": "Matter Hospital", "times": 7 },
    {"location": "Mukurukwaruben", "hospital": "Mukuru Referral", "times": 12 },
    {"location": "Babadogo", "hospital": "Level 5", "times": 38 },
    {"location": "Kosovo", "hospital": "Clinic Kosovo", "times": 4 },
    {"location": "Kakamega", "hospital": "Oasis", "times": 46 },
    {"location": "Kalibu", "hospital": "Alib", "times": 16 },
    {"location": "India", "hospital": "ulius", "times": 9 },
    {"location": "Mukurukwanjenga", "hospital": "Mukuru level5", "times": 26 }
] 

const VisitType = new graphql.GraphQLObjectType({
    name: 'Visit',
    fields:{
        location:{type:graphql.GraphQLString},
        hospital:{type:graphql.GraphQLString},
        times:{type:GraphQLInt},
    }
})

const keyissues = [
    {"issue": "wrong prescription", "location": "Kosovo"},
    {"issue": "late opening", "location": "Kiambu"},
    {"issue": "bad receipts", "location": "New York"},
    {"issue": "lab delay", "location": "Kiambu"},
    {"issue": "careless waste disposal", "location": "Kiambu"},


]

const KeyissueType = new graphql.GraphQLObjectType({
    name: 'Keyissue',
    fields:{
        issue:{type:graphql.GraphQLString},
        location:{type:graphql.GraphQLString},
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
        },

        keyissue: {
            type:KeyissueType,
            args: {issue:{type:GraphQLString}},
            resolve(parentvalue,args){
                return _.find(keyissues,{issue:args.issue})
            }


        }
    }
})


module.exports = new graphql.GraphQLSchema({
    query:RootQuery
})

