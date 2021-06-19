const express = require ('express');
const expressGraphQl = require ('express-graphql').graphqlHTTP
const port = 4800 ;
const app = express()
const schema = require ('./schema/schema');

import { bodyParserGraphQL } from 'body-parser-graphql'

app.use('/graphql',expressGraphQl,bodyParserGraphQL({
    schema,
    graphiql:true
}))
app.listen (port, () => {
    console.log(`listening to port ${port}`)
})