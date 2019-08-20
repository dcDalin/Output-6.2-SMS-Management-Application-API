import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import config from './config';

const ENV_VAR = config.get(process.env.NODE_ENV);

const PORT = process.env.PORT || ENV_VAR.APP_PORT;

const DB_URI = process.env.MONGODB_URI || ENV_VAR.MONGO_URL;

(async () => {
  try {
    const app = express();

    app.disable('x-powered-by');

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => ({ req }),
      introspection: true,
      playground: true,
    });

    server.applyMiddleware({ app });

    await mongoose.connect(DB_URI, { useNewUrlParser: true });

    // eslint-disable-next-line no-console
    app.listen({ port: PORT }, () => console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
