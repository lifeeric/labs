import express, { Application } from "express";
import { ApolloServer, gql } from "apollo-server-express";
const app: Application = express();

const resolvers = {
  Result: {
    __resolveType(obj: any, context: any, info: any) {
      if (obj.name) {
        return "Author";
      }

      if (obj.title) {
        return "Book";
      }

      return null;
    },
  },
  Query: {
    search: () => "searchin...",
  },
};

const typeDefs = gql`
  union Result = Book | Author

  type Book {
    title: String
  }

  type Author {
    name: String
  }

  type Query {
    search: [Result]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(8001);
