const express = require ('express');
const expressGraphQl = require ('express-graphql').graphqlHTTP
const port = 4800 ;
const app = express()
const schema = require ('./schema/schema');



app.use('/graphql',expressGraphQl({
    schema,
    graphiql:true
}))
app.listen (port, () => {
    console.log(`listening to port ${port}`)
})

server.listen({ port: process.env.PORT || 4800 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });