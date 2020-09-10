import * as React from "react"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import styled from "styled-components"
import { MainContent } from "./MainContent/MainContent"

/**
 * Styled Components
 */

const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
`

export default () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent />
    </>
  )
}
