import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import { resolvers, typeDefs } from "./graphql";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
});

const startApolloServer = async (typeDefs, resolvers) => {
  // Create express app instance
  const app = express();

  // Create http server instance to be used in ApolloServerPluginDrainHttpServer
  const httpServer = http.createServer(app);

  // Create appollo server instance
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // Start the apollo server
  await server.start();

  // Add apollo server to Express server
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  // Connect to mongodb atlas server
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("database connection established"))
    .catch((err) => console.log("error when connecting to Mongoose", err));

  //
  // add();
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startApolloServer(typeDefs, resolvers);