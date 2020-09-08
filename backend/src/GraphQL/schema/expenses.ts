import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getExpenses(id: ID!): [getExpensesUnion]!
  }

  union getExpensesUnion = GetExpensesResult | Error

  type GetExpensesResult {
    id: ID!
    name: String!
    description: String!
    price: Float!
    date: String!
  }

  extend type Mutation {
    addExpenses(add: addNewExpenses): ExpensesUnion!
  }

  input addNewExpenses {
    id: ID!
    name: String!
    description: String!
    price: Float!
    date: String!
  }

  union ExpensesUnion = GetExpensesResult | Error
`;
