import * as React from "react"
import styled from "styled-components"

interface Props {
  isTrue: Boolean
  onClick: () => void
}

/**
 * Styled components
 */

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: pointer;
`

export const BackdropComp: React.FC<Props> = ({ isTrue, onClick }) =>
  isTrue && <Backdrop onClick={onClick} />
