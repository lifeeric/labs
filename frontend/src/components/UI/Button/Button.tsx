import * as React from "react"
import styled from "styled-components"

interface Props {
  children: string | JSX.Element
  width: string
  type?: string
  shadow?: boolean
  btnType?: boolean
}

interface StyleProps {
  primary: any
  width: string
  shadow?: boolean
  type?: any
}

/**
 * Styled components
 */

const Button = styled.button<StyleProps>`
  width: ${({ width }) => width};
  color: #fff;
  background: ${({ primary }) =>
    primary === "primary" ? "#4a5bbf" : "#F98BA4"};
  border-radius: 35px;
  border: none;
  padding: 8.8px 0;
  font-weight: 550;
  cursor: pointer;
  ${({ shadow }) =>
    shadow === true &&
    `box-shadow:  2px 3px 9px rgba(0, 0, 0, 0.25), 2px 3px 6px rgba(0, 0, 0, 0.15), 1px 2px 4px rgba(0, 0, 0, 0.06);`}
`

export const ButtonComp: React.FC<Props> = ({
  children,
  type,
  shadow,
  width,
  btnType,
}) => {
  return (
    <Button primary={type} type={btnType ? 'submit' : 'nosubmit'} shadow={shadow} width={width}>
      {children}
    </Button>
  )
}
