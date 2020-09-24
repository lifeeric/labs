import * as React from "react"
import Expenses from "../components/Pages/Expenses/Expenses"
import { Router } from "@reach/router"
import { PrivateRoute } from "../components/UI/PrivateRoute/PrivateRoute"

export default () => (
  <>
    <Router>
      <PrivateRoute path="/expenses" component={Expenses} />
    </Router>
  </>
)
