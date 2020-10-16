import * as React from "react"
import { Login } from "../components/Pages/Login/login"
import { customHook } from "../utils/customHook"
import { navigate } from "gatsby"

export default () => {
  const { currentUser } = customHook()
  if (!!currentUser.token) navigate("/dashboard")
  
  return (
    <>
      <Login />
    </>
  )
}
