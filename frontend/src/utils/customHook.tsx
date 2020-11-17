import { gql, useReactiveVar } from "@apollo/client"
import { stateVar } from "./cache"

const GET_STATE = gql`
  query SATE {
    state @client
  }
`

export const customHook = () => {
  const state = useReactiveVar(stateVar)
  return state
}

export const toggleSidebar = (): void => {
  stateVar({
    ...stateVar(),
    sidebar: !stateVar().sidebar,
  })
}

export type TLogin = {
  _id: string
  email: string
  token: string
  name: string
  isAdmin: boolean
}
export const login = (currentUser: TLogin) => {
  stateVar({
    ...stateVar(),
    currentUser,
  })
}

// problem with token type
export const updateToken = (token: any) => {
  stateVar({
    ...stateVar(),
    currentUser: {
      ...stateVar().currentUser,
      token: token,
    },
  })
}
