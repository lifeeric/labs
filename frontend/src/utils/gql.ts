import { gql } from "@apollo/client"

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
