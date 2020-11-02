import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getExpenses(id: ID!): [getExpensesUnion]!
    getChartData(id: ID): [GetChartUnion]!
  }

  union getExpensesUnion = GetExpensesResult | Error

  type GetExpensesResult {
    id: ID!
    name: String!
    description: String!
    price: Float!
    date: String!
  }

  union GetChartUnion = GetChartResult | Error

  type GetChartResult {
    id: ChartPiece
    totalPrice: Float!
    date: String!
  }
  type ChartPiece {
    _id: ID
    date: String
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
