import * as React from "react"
import { Dashboard } from "../components/Pages/Dashboard/"
import { PrivateRoute } from "../components/UI/PrivateRoute/PrivateRoute"
import { Router } from "@reach/router"

export default () => (
  <>
    <Router>
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  </>
)
