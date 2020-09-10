import * as React from "react"
import { Header } from "../Dashboard/Header/Header"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { MainContent } from "../Dashboard/MainContent/MainContent"
import { SubHeader } from "./SubHeader/SubHeader"
import { Box } from "./Box/Box"

export default () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent>
        <SubHeader />
        <Box />
      </MainContent>
    </>
  )
}
