import * as React from "react"
import { Header } from "../Dashboard/Header/Header"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { MainContent } from "../../UI/MainContent/MainContent"
import { SubHeader } from "../../UI/SubHeader/SubHeader"
import { Wrapper } from "./Wrapper/Wrapper"
import { Snackbar } from "../../UI/Snackbar/Snackbar"

export default () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent>
        <SubHeader leftHeader="All Expenses" rightHeader="yes" />
        <Wrapper />
      </MainContent>
      <Snackbar />
    </>
  )
}
