import * as React from "react"
import styled from "styled-components"
import { BackdropComp as Backdrop } from "../Backdrop/Backdrop"

interface Props {
  children: JSX.Element[] | JSX.Element
}

/**
 * Styled Components
 */

const SideDraw = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #fff;
`

export const SideDrawer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Backdrop isTrue={true} />
      <SideDraw>{children}</SideDraw>
    </>
  )
}
