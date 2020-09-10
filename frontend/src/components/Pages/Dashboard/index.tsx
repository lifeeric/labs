import * as React from "react"
import { Header } from "./Header/Header"
import { Row, Col, Container } from "react-grid-system"
import { Sidebar } from "./Sidebar/Sidebar"
import styled from "styled-components"

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
      <h1>main content</h1>
    </>
  )
}
