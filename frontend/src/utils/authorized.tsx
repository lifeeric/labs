/**
 * This component is not in uses, build for testing
 */

import * as React from "react"
import { useState, useReducer } from "react"
import { useLocalStorage } from "./localStorage"

type IState = {
  sidebar: boolean
  toggleSidebar: () => void
  currentUser: {
    name: string
    email: string
    token: string
  }
  authorized: boolean
}

export const LocalContext = React.createContext({})
const initialState: IState = {
  sidebar: false,
  toggleSidebar: () => {},
  currentUser: {
    name: "",
    email: "",
    token: "",
  },
  authorized: false,
}

const uiReducer = (state: any, action: any) => {
  switch (action.type) {
    case "":
      return {
        ...state,
      }
  }
}

// export const LocalProvider: React.FC = ({ children }) => {
//   const [sidebar, setSidebar] = useState(false)
//   const [state, dispatch] = useReducer(uiReducer, initialState)
//   const toggleSidebar = (): void => {
//     setSidebar(sidebar => !sidebar)
//   }

//   const [getUser, setUser] = useLocalStorage()

//   const newState = {
//     sidebar,
//     toggleSidebar,
//     currentUser: {
//       name: "",
//       email: "",
//       token: "",
//     },
//     authorized: "",
//   }

//   return (
//     <LocalContext.Provider value={state}>{children}</LocalContext.Provider>
//   )
// }
