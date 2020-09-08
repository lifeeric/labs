import * as React from "react"
import styled, { css } from "styled-components"

interface Props {
  onClick: any
  isCross: Boolean
}

/**
 * Styled components
 */

interface StyledProps {
  width: string
  isCross: "one" | "hide" | "two"
}

const HamBurger = styled.div`
  cursor: pointer;
  z-index: 1;

  @media (min-width: 851px) {
    display: none;
  }
`

const Line = styled.div<StyledProps>`
  width: ${({ width }: any) => width};
  ${({ isCross }) =>
    isCross === "hide" &&
    css`
      display: none;
    `}
  ${({ isCross }) =>
    isCross === "one" &&
    css`
      transform: rotate(40deg) translate(0px, 4px);
      width: 40px;
    `}
  ${({ isCross }) =>
    isCross === "two" &&
    css`
      transform: rotate(-40deg) translate(0px, -4px);
      width: 40px;
    `}
  height: 3px;
  background: #4a5bbf;
  margin-bottom: 5px;
  border-radius: 30px;
`

export const HamBurgerComp: React.FC<Props> = ({ onClick, isCross }) => {
  return (
    <HamBurger onClick={onClick}>
      <Line width="40px" isCross={isCross && "one"}></Line>
      <Line width="35px" isCross={isCross && "hide"}></Line>
      <Line width="30px" isCross={isCross && "two"}></Line>
    </HamBurger>
  )
}
