import * as React from "react"
import { useState } from "react"
import { useQuery } from "@apollo/client"

export const LocalContext = React.createContext({
  sidebar: false,
  toggleSidebar: () => {},
})

export const LocalProvider: React.FC = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = (): void => {
    setSidebar(sidebar => !sidebar)
  }

  console.log(sidebar, 'hello')

  // new states
  const newState = {
    sidebar,
    toggleSidebar,
  }
  return (
    <LocalContext.Provider value={newState}>{children}</LocalContext.Provider>
  )
}
