import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import Ripples from "react-ripples"

interface Props {
  text: string
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
  background: ${({ type }) => (type === "success" ? "#4caf50" : "#323232")};
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

export const Snackbar: React.FC<Props> = ({ text }) => {
  const [state, setState] = useState<boolean>(true)

  const closeSnackbarHandler = (): void => {
    setState(false)
  }

  if (!state) return null

  return (
    <SnackBarComp type={"success"}>
      {text}
      <Close>
        <Ripples>
          <MdClose onClick={closeSnackbarHandler} />
        </Ripples>
      </Close>
    </SnackBarComp>
  )
}
