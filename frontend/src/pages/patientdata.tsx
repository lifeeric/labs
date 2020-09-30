import * as React from "react"
import { PatientData } from "../components/Pages/PatientData/PatientData"
import { PrivateRoute } from "../components/UI/PrivateRoute/PrivateRoute"
import { Router } from "@reach/router"

export default () => (
  <Router>
    <PrivateRoute path="/patientdata" component={PatientData} />
  </Router>
)
