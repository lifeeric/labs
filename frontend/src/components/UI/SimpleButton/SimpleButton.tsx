import * as React from "react"
import Ripples from "react-ripples"
import styled from "styled-components"

/**
 * Styled Components
 */

const ButtonComp = styled.div`
  color: #f98ba4;
  font-weight: 600;
  padding: 6px 10px;
  cursor: pointer;
`

interface Props {
  onClick: () => void
}

export const SimpleButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Ripples>
      <ButtonComp onClick={onClick}>Cancel</ButtonComp>
    </Ripples>
  )
}
