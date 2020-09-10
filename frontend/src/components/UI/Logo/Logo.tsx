import * as React from "react"
import styled from "styled-components"

interface Props {}

/**
 * Styled components
 */

const LogoComp = styled.div`
  color: #4a5bbf;
  padding-left: 25px;
`

export const Logo: React.FC<Props> = () => {
  return (
    <LogoComp>
      <h1> BIO </h1>
    </LogoComp>
  )
}
