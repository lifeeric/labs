import * as React from "react"
import styled, { keyframes } from "styled-components"
import Ripples from "react-ripples"
import { ImSpinner8 } from "react-icons/im"

interface Props {
  children: string | JSX.Element
  width: string
  type?: string
  shadow?: boolean
  btnType?: boolean
  isLoading?: boolean
}

interface StyleProps {
  primary: any
  shadow?: boolean
  type?: any
}

type WidthProps = {
  width: string
}

/**
 * Styled components
 */

const Button = styled.button<StyleProps>`
  width: 100%;
  color: #fff;
  background: ${({ primary }) =>
    primary === "primary" ? "#4a5bbf" : "#F98BA4"};
  border: none;
  padding: 8.8px 0;
  font-weight: 550;
  cursor: pointer;
  outline: none;
  ${({ shadow }) =>
    shadow === true &&
    `box-shadow:  2px 3px 9px rgba(0, 0, 0, 0.25), 2px 3px 6px rgba(0, 0, 0, 0.15), 1px 2px 4px rgba(0, 0, 0, 0.06);`}
`

const Width = styled.div<WidthProps>`
  width: ${({ width }) => width};
  border-radius: 35px;
  overflow: hidden;
`

const Ripple = styled(Ripples)`
  width: 100%;
`

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`

const Spinner = styled(ImSpinner8)`
  animation: ${animation} 1s linear infinite;
`

export const ButtonComp: React.FC<Props> = ({
  children,
  type,
  shadow,
  width,
  btnType,
  isLoading,
}) => {
  return (
    <Width width={width}>
      <Ripple>
        <Button
          primary={type}
          type={btnType ? "submit" : "nosubmit"}
          shadow={shadow}
        >
          {isLoading ? <Spinner /> : children}
        </Button>
      </Ripple>
    </Width>
  )
}
