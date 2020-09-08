import { gql } from "apollo-server-express";

export default gql`
  extend type Mutation {
    addTestTemplate(add: addTemplate): getTestTemplateResult!
  }

  input addTemplate {
    test_name: String!
    test_label1: String!
    test_value1: String
    test_label2: String
    test_value2: String
  }

  type getTestTemplateResult {
    test_name: String
    test_label1: String
    test_value1: String
    test_label2: String
    test_value2: String
  }
`;
