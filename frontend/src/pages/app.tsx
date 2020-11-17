import * as React from "react"
import { Router } from "@reach/router"
import { ForgotPassword } from "../components/Pages/ForgotPassword/"
import { Login } from "../components/Pages/Login/login"
import { Setting } from "../components/Pages/Setting/Setting"
import Expenses from "../components/Pages/Expenses/Expenses"
import { AddReport } from "../components/Pages/AddReport/AddReport"
import { PatientData } from "../components/Pages/PatientData/PatientData"
import { AddTemplate } from "../components/Pages/AddTemplate/AddTemplate"
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
      <PrivateRoute path="/app/setting" component={Setting} />
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/patientdata" component={PatientData} />
      <PrivateRoute path="/app/template" component={AddTemplate} />
    </Router>
  )
}
