import * as React from "react"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { Header } from "../Dashboard/Header/Header"
import { MainContent } from "../../UI/MainContent/MainContent"
import { SubHeader } from "../../UI/SubHeader/SubHeader"
import { Box } from "../../UI/Box/Box"

export const AddReport: React.FC = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent>
        <SubHeader leftHeader="Add New Report" />
        <Box>
          <h1>Hello</h1>
        </Box>
      </MainContent>
    </>
  )
}
