import * as React from "react"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { Header } from "../Dashboard/Header/Header"

export const PatientData: React.FC = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
    </>
  )
}
