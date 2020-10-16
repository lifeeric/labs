import * as React from "react"
import { ForgotPassword } from "../components/Pages/ForgotPassword/"
import { Router } from "@reach/router"

export default () => (
  <Router>
    <ForgotPassword path="/forgot-password/:url" />
  </Router>
)
