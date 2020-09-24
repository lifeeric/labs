import * as React from "react"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { MainContent } from "../../UI/MainContent/MainContent"

export default () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent>
        <h1>Dashboard</h1>
      </MainContent>
    </>
  )
}
