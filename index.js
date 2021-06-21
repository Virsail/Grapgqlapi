const express = require ('express');
const expressGraphQl = require ('express-graphql').graphqlHTTP
const app = express()
const schema = require ('./schema/schema');






app.use('/graphql',expressGraphQl({
    schema,
    graphiql:true
}))

const PORT = process.env.PORT  || 5000;

app.listen (PORT, () => console.log(`listening to port ${PORT}`));


