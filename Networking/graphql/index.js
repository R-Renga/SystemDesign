import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolver.js';
import { typeDefs } from './typeDefs.js';

// Create Apollo Server
const server = new ApolloServer({
    typeDefs,  // ✅ Fix: Correct property name
    resolvers  // ✅ Fix: Correct property name
});

// Start Server

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
});

console.log(`🚀 Server ready at: ${url}`);
