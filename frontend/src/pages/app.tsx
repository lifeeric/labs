import * as React from "react"
import { Router } from "@reach/router"
import { ForgotPassword } from "../components/Pages/ForgotPassword/"
import { Login } from "../components/Pages/Login/login"
import { Setting } from "../components/Pages/Setting/Setting"
import { Analytics } from "../components/Pages/Analytics/Analytics"
import Expenses from "../components/Pages/Expenses/Expenses"
import { AddReport } from "../components/Pages/AddReport/AddReport"
import { PatientData } from "../components/Pages/PatientData/PatientData"
import { Dashboard } from "../components/Pages/Dashboard/"
import { PrivateRoute } from "../components/UI/PrivateRoute/PrivateRoute"

import "./index.scss"

export default () => {
  return (
    <Router>
      <Login path="/app/login" />
      <ForgotPassword path="/app/forgot-password/*" />
      <PrivateRoute path="/app/expenses" component={Expenses} />
      <PrivateRoute path="/app/addreport" component={AddReport} />
      <PrivateRoute path="/app/analytics" component={Analytics} />
      <PrivateRoute path="/app/setting" component={Setting} />
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/patientdata" component={PatientData} />
    </Router>
  )
}
