import * as React from "react"
import Burger from "@animated-burgers/burger-slip"
import "@animated-burgers/burger-slip/dist/styles.css"
import styled from "styled-components"

interface Props {
  isOpen: boolean
  clickMeDown: () => void
}
interface StyleProps {
  isOpen: any
}

/**
 * Styled components
 */

const BurgerComp = styled((props: any) => <Burger {...props} />)`
  & .burger.burger-slip,
  .burger-lines,
  .burger.burger-slip,
  .burger-lines:after,
  .burger.burger-slip,
  .burger-lines:before {
    background: #4a5bbf;
  }
`

export const HumBurger: React.FC<Props> = ({ isOpen, clickMeDown }) => {
  return <BurgerComp isOpen={isOpen} onClick={clickMeDown} />
}
