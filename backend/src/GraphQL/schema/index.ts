import { gql } from "apollo-server-express";
import users from "./user";
import expenses from "./expenses";
import testTemplate from "./testTemplate";
import reports from "./reports";

export default gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }

  type Error {
    error: Boolean!
    message: String!
  }

  ${expenses}
  ${users}
  ${testTemplate}
  ${reports}
`;
