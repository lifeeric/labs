import * as React from "react"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { MainContent } from "../../UI/MainContent/MainContent"
import { RevenueChart } from "../../UI/RevenueChart/RevenueChart"

export default () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent>
        <RevenueChart />
      </MainContent>
    </>
  )
}
