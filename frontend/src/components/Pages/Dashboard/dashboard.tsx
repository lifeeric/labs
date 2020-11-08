import * as React from "react"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { MainContent } from "../../UI/MainContent/MainContent"
import { RevenueChart } from "../../UI/RevenueChart/RevenueChart"
import { Counter } from "./Counter/Counter"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent>
        <RevenueChart />
        <Flex>
          <Counter />
          <Counter />
        </Flex>
      </MainContent>
    </>
  )
}
