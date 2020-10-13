import * as React from "react"
import styled, { keyframes } from "styled-components"
import { MdClose } from "react-icons/md"
import Ripples from "react-ripples"

interface Props {
  text: string
  closeSnackbar: () => void
  state?: string
  isOpen: boolean
}

interface StyleProps {
  type?: string
}

/**
 * Styled Components
 */

const SnackBarComp = styled.div<StyleProps>`
  position: fixed;
  bottom: 15px;
  left: 15px;
  min-width: 295px;
  background: ${({ type }) =>
    type === "success" ? "#4caf50" : type === "danger" ? "#F4443E" : "#323232"};
  color: #ffff;
  padding: 14px 16px;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
`

const Close = styled.span`
  width: 20px;
  height: 100%;
  position: absolute;
  right: 10px;
  top: 12px;
  line-height: 10px;

  font-size: 20px;
`

const countdown = keyframes`
from {
transform: translateX(0);
}
to {
transform: translateX(-100%);
}
`
const BottomLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: black;
  animation: ${countdown} 5s linear;
`

const propsAreEqual = (prevProps: any, nextProps: any) => {
  return prevProps.isOpen === nextProps.isOpen
}

export const Snackbar: React.FC<Props> = React.memo(
  ({ state, isOpen, text, closeSnackbar }) => {
    if (!isOpen) return null
    console.log(state, isOpen, " Snackbar ->")

    return (
      <SnackBarComp type={state}>
        {text}
        <Close>
          <Ripples>
            <MdClose onClick={closeSnackbar} />
          </Ripples>
        </Close>
        <BottomLine />
      </SnackBarComp>
    )
  },
  propsAreEqual
)
