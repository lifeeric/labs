import * as React from "react"
import { MdAddCircle } from "react-icons/md"
import styled from "styled-components"

interface Props {}

/**
 * Styled components
 */

const Header = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #373f49;
`

const Icon = styled(MdAddCircle)`
  font-size: 2em;
  cursor: pointer;
  color: #4a5bbf
`

export const SubHeader: React.FC<Props> = () => {
  return (
    <Header>
      <h3 className="subheader__title">All Expenses</h3>
      <div className="subheader__add" title="Add expenses">
        <Icon />
      </div>
    </Header>
  )
}
