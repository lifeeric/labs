import { makeVar, InMemoryCache } from "@apollo/client"
import { useLocalStorage } from "./localStorage"

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        state: {
          read() {
            return stateVar()
          },
        },
      },
    },
  },
})

export const stateVar = makeVar({
  sidebar: false,
  tests: [],
  currentUser: {
    _id: "",
    email: "",
    name: "",
    token: "",
    isAdmin: false,
  },
})

const defaultUser = () => {
  const [getUser] = useLocalStorage()
  console.log(getUser())
  stateVar({
    ...stateVar(),
    currentUser: getUser(),
  })
}
defaultUser()
console.log(stateVar(), " from cach.ts")
