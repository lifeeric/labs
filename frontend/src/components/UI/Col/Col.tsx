import * as React from "react"
import styled from "styled-components"

/**
 * Styled Components
 */

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media (max-width: 1100px) {
    flex-wrap: wrap-reverse;
  }
`

const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin: 10px auto;

  @media (max-width: 1100px) {
    flex: 1 0 100%;
    max-width: 100%;
    text-align: center;
  }
`

/**
 * Col Comp
 */
export const ColComp: React.FC = ({ children }) => <Col>{children}</Col>

/**
 * Row Comp
 */
export const RowComp: React.FC = ({ children }) => <Row>{children}</Row>
