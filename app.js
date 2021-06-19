const express = ('express');
const expressGraphQl = ('express-graphql');
const port = 4800 ;
const app = express()

app.use('/graphql',expressGraphQl({
    schema,
    graphql:true
}))
app.listen (port, () => {
    console.log(`listening to port ${port}`)
})