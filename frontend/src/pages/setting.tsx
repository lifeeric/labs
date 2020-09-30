import * as React from "react"
import { Setting } from "../components/Pages/Setting/Setting"
import { PrivateRoute } from "../components/UI/PrivateRoute/PrivateRoute"
import { Router } from "@reach/router"

export default () => (
  <Router>
    <PrivateRoute path="/setting" component={Setting} />
  </Router>
)
