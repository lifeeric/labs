import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getReports(id: ID!, patient_id: Int): [getReportUnion]!
    getProfit(id: ID!, date: String): [GetLabProfitUnion]!
    getTotalRecord(id: ID!): getTotalRecordUnion!
    getTestTemplate(id: ID!): [generateTemplateUnion]!
  }

  union GetLabProfitUnion = GetLabProfit | Error

  type GetLabProfit {
    totalPrice: Float!
    id: ChartPieace
  }

  type ChartPieace {
    _id: ID!
    date: String!
  }

  union getTotalRecordUnion = getTotalRecordResult | Error

  type getTotalRecordResult {
    level: String!
    totalTests: Float!
  }

  union getReportUnion = Error | getReportResult

  extend type Mutation {
    addReport(add: addReport!): ReportUnion!
    generateTemplate(add:TESTS): generateTemplateUnion!
  }

  union ReportUnion = getReportResult | Error

  input addReport {
    id: ID!
    patient_id: Int
    patient_name: String!
    patient_referedby: String!
    patient_age: Int!
    patient_sex: String!
    price: Float!
    date: String!
    tests: [TESTS]!
  }

  input TESTS {
    id: Int
    name: String!
    test: [ATest]!
  }

  input ATest {
    test_name: String!
    normalRanges: [String]
    unit: String
    results: String!
  }

  union generateTemplateUnion = GenTemplateResult | Error

  type GenTemplateResult {
    id: Int!
    name: String!
    test: [SingleReport]!
  }

  type SingleReport {
    test_name: String!
    normalRanges: [String]
    unit: String
    results: String!
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
    tests: [getAllTestResult]!
  }

  type getAllTestResult {
    id: Int!
    name: String!
    test: [Results]!
  }

  type Results {
    test_name: String!
    normalRanges: [String]!
    unit: String!
    results: String
  }
`;
