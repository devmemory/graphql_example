const ApolloServer = require('apollo-server').ApolloServer;

const resolvers = require('./resolvers/index')

const typeDefs = require('./typedefs/index')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});