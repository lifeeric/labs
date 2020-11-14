"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./GraphQL/schema/index"));
var index_2 = __importDefault(require("./GraphQL/resolvers/index"));
var Auth_1 = __importDefault(require("./Auth/Auth"));
var app = express_1.default();
/**
 * Dot Env
 */
require("dotenv").config();
/**
 * Middleware
 */
app.use(cors_1.default());
/**
 * Apollo GraphQL API Setup
 */
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: index_1.default,
    resolvers: index_2.default,
    context: function (integrationContext) { return ({
        Auth: Auth_1.default(integrationContext),
        req: integrationContext.req,
    }); },
});
server.applyMiddleware({ app: app });
/*
 * DB connection
 */
var URi = process.env.MONGO_URI;
mongoose_1.default
    .connect(URi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () { return console.log("DB is connected"); })
    .catch(function (err) { return console.error(err, "Falied to connected"); });
/**
 * Port Listening
 */
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is up on " + PORT);
});
