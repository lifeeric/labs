import { gql } from "@apollo/client"

export const LOGIN_QUERY = gql`
  query LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      __typename
      ... on LoginUserResult {
        _id
        email
        token
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
        name
        email
        company
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

export const REST_PASSWORD = gql`
  mutation($id: ID!, $password: String!, $passwordAgain: String!) {
    resetPassword(id: $id, password: $password, passwordAgain: $passwordAgain) {
      error
      message
    }
  }
`
