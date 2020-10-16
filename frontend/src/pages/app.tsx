import * as React from "react"
import { Router } from "@reach/router"
import { ForgotPassword } from "../components/Pages/ForgotPassword/"
import { Login } from "../components/Pages/Login/login"

export default () => {
  return (
    <Router>
      <Login path="/app/login" />
      <ForgotPassword path="/app/forgot-password/*" />
    </Router>
  )
}
