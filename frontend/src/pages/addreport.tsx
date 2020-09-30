import * as React from "react"
import { AddReport } from "../components/Pages/AddReport/AddReport"
import { PrivateRoute } from "../components/UI/PrivateRoute/PrivateRoute"
import { Router } from "@reach/router"

export default () => (
  <Router>
    <PrivateRoute path="/addreport" component={AddReport} />
  </Router>
)
