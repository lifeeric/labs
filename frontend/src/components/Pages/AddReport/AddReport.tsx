import * as React from "react"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { Header } from "../Dashboard/Header/Header"
import { MainContent } from "../../UI/MainContent/MainContent"
import { SubHeader } from "../../UI/SubHeader/SubHeader"
import { Box } from "../../UI/Box/Box"
import { Container } from "./Container/Container"

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
          <Container />
        </Box>
      </MainContent>
    </>
  )
}
