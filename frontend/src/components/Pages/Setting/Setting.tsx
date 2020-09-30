import * as React from "react"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { Header } from "../Dashboard/Header/Header"
import { User } from "./User/User"
import { MainContent } from "../../UI/MainContent/MainContent"
import { SubHeader } from "../../UI/SubHeader/SubHeader"

export const Setting: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <MainContent>
        <SubHeader leftHeader="Setting" />
        <User />
      </MainContent>
    </>
  )
}
