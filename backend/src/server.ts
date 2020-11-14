import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import cors from "cors";
import typeDefs from "./GraphQL/schema/index";
import resolvers from "./GraphQL/resolvers/index";
import Auth from "./Auth/Auth";

const app: Application = express();

/**
 * Dot Env
 */
require("dotenv").config();

/**
 * Middleware
 */
app.use(cors());

/**
 * Apollo GraphQL API Setup
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (integrationContext) => ({
    Auth: Auth(integrationContext),
    req: integrationContext.req,
  }),
});

server.applyMiddleware({ app });

/*
 * DB connection
 */
const URi: any = process.env.MONGO_URI;

mongoose
  .connect(URi, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB is connected"))
  .catch((err) => console.error(err, "Falied to connected"));

/**
 * Port Listening
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on  Port ${PORT}`);
});
