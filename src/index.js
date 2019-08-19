import express from 'express';

import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

const PORT = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

// eslint-disable-next-line no-console
app.listen({ port: PORT }, () => console.log(`Server reqdy at http://localhost:${PORT}${server.graphqlPath}`));
