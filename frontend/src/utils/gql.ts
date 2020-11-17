import { gql } from "@apollo/client"

export const LOGIN_QUERY = gql`
  query LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      __typename
      ... on LoginUserResult {
        _id
        email
        token
        isAdmin
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const GET_EXPENSES_LIST = gql`
  query EXPENSES_LIST($id: ID!) {
    getExpenses(id: $id) {
      __typename
      ... on GetExpensesResult {
        id
        name
        description
        price
        date
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const ADD_NEW_EXPENSES = gql`
  mutation ADD_EXPENSES(
    $id: ID!
    $name: String!
    $description: String!
    $price: Float!
    $date: String!
  ) {
    addExpenses(
      add: {
        id: $id
        name: $name
        description: $description
        price: $price
        date: $date
      }
    ) {
      __typename
      ... on GetExpensesResult {
        id
        name
        description
        price
        date
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const GET_USER_SETTING = gql`
  query USER_SETTING($id: ID!) {
    userSetting(id: $id) {
      __typename
      ... on GetUserSettingResult {
        id
        name
        email
        company
        refered {
          name
        }
      }
      ... on Error {
        error
        message
      }
    }
  }
`

export const UPDATE_PASSWD = gql`
  mutation(
    $id: ID!
    $oldPassword: String!
    $newPassword: String!
    $newPasswordAgain: String!
  ) {
    updatePassword(
      id: $id
      oldPassword: $oldPassword
      newPassword: $newPassword
      newPasswordAgain: $newPasswordAgain
    ) {
      error
      message
    }
  }
`

export const REGISTER_USER = gql`
  mutation(
    $name: String!
    $email: String!
    $password: String!
    $company: String
    $referedBy: ID
  ) {
    createUser(
      user: {
        name: $name
        email: $email
        password: $password
        company: $company
        referedBy: $referedBy
      }
    ) {
      __typename
      ... on UserResult {
        _id
      }
      ... on Error {
        error
        message
      }
    }
  }
`

export const FORGOT_PASSWORD = gql`
  query FORGOT_PASSWORD($email: String!) {
    forgotPassword(email: $email) {
      error
      message
    }
  }
`

export const RESET_PASSWORD = gql`
  mutation(
    $id: ID!
    $validateURL: Boolean
    $password: String
    $passwordAgain: String
  ) {
    resetPassword(
      id: $id
      validateURL: $validateURL
      password: $password
      passwordAgain: $passwordAgain
    ) {
      error
      message
    }
  }
`

export const UPDATE_USER_SETTING = gql`
  mutation($id: ID!, $name: String!, $email: String!, $company: String!) {
    updateUserSetting(id: $id, name: $name, email: $email, company: $company) {
      __typename
      ... on GetUserSettingResult {
        name
        email
        company
        refered {
          name
        }
      }
      ... on Error {
        error
        message
      }
    }
  }
`

export const GET_CHART_DATA = gql`
  query Get_Chart_Data($id: ID!, $date: String!) {
    getChartData(id: $id, date: $date) {
      __typename
      ... on GetChartResult {
        id {
          _id
          date
        }
        totalPrice
      }
      ... on Error {
        error
        message
      }
    }
  }
`

export const ADD_REPORT = gql`
  mutation(
    $id: ID!
    $patient_id: Int
    $patient_name: String!
    $patient_age: Int!
    $patient_sex: String!
    $patient_referedby: String!
    $date: String!
    $price: Float!
    $tests: [TESTS]!
  ) {
    addReport(
      add: {
        id: $id
        patient_id: $patient_id
        patient_name: $patient_name
        patient_referedby: $patient_referedby
        patient_age: $patient_age
        patient_sex: $patient_sex
        price: $price
        date: $date
        tests: $tests
      }
    ) {
      __typename
      ... on getReportResult {
        id
        patient_name
        patient_referedby
        patient_age
        patient_sex
        price
        date
        tests {
          id
          name
          test {
            test_name
            normalRanges
            unit
            results
          }
        }
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const GET_REPORTS = gql`
  query Get_Report($id: ID!, $patient_id: Int) {
    getReports(id: $id, patient_id: $patient_id) {
      __typename
      ... on getReportResult {
        id
        patient_id
        patient_name
        patient_referedby
        patient_age
        patient_sex
        price
        date
        tests {
          id
          name
          test {
            test_name
            normalRanges
            unit
            results
          }
        }
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const GET_PROFIT = gql`
  query Get_Profit($id: ID!, $date: String) {
    getProfit(id: $id, date: $date) {
      __typename
      ... on GetLabProfit {
        totalPrice
        id {
          date
          _id
        }
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const TOTAL_RECORDS = gql`
  query Get_Reports($id: ID!) {
    getTotalRecord(id: $id) {
      __typename
      ... on getTotalRecordResult {
        level
        totalTests
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const GET_TEST_TEMPLATE = gql`
  query Get_Test_Template($id: ID!) {
    getTestTemplate(id: $id) {
      __typename
      ... on GenTemplateResult {
        id
        name
        test {
          test_name
          results
          normalRanges
          unit
        }
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const CREATE_TEST_TEMPLATE = gql`
  mutation($name: String!, $test: [ATest]!) {
    generateTemplate(add: { name: $name, test: $test }) {
      __typename
      ... on GenTemplateResult {
        id
        name
        test {
          test_name
          results
          unit
          normalRanges
        }
      }
      ... on Error {
        error
        message
      }
    }
  }
`
