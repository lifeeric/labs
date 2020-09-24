/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ApolloProvider, ApolloClient, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { cache, stateVar } from "./src/utils/cache"
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
})

const authLink = setContext((_, { headers }) => {
  const {
    currentUser: { token },
  } = stateVar()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true,
  fetch,
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
