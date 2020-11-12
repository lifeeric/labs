import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getReports(id: ID!, patient_id: Int): [getReportUnion]!
  }

  union getReportUnion = Error | getReportResult

  extend type Mutation {
    addReport(add: addReport!): ReportUnion!
  }

  union ReportUnion = getReportResult | Error

  input addReport {
    id: Int
    patient_name: String!
    patient_referedby: String!
    patient_age: Int!
    patient_sex: String!
    price: Float!
    date: String!
    test_id: String!
    test_name: String!
    test_result: String!
  }

  type getReportResult {
    id: ID!
    patient_id: Int
    patient_name: String!
    patient_referedby: String!
    patient_age: Int!
    patient_sex: String!
    price: Float!
    date: String!
  }
`;
