import * as React from "react"
import { Analytics } from "../components/Pages/Analytics/Analytics"
import { PrivateRoute } from "../components/UI/PrivateRoute/PrivateRoute"
import { Router } from "@reach/router"

export default () => (
  <Router>
    <PrivateRoute path="/analytics" component={Analytics} />
  </Router>
)
