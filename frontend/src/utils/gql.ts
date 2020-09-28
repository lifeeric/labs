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
