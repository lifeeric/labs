import * as React from "react"
import { useState } from "react"
import { MdAddCircle } from "react-icons/md"
import styled from "styled-components"
import { AddExpenses } from "../../Pages/Expenses/AddExpenses/AddExpenses"

interface Props {
  leftHeader: JSX.Element | string
  rightHeader?: JSX.Element | string
}

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
  color: #4a5bbf;
`

export const SubHeader: React.FC<Props> = ({ leftHeader, rightHeader }) => {
  const [isModel, setIsModel] = useState<boolean>(false)

  const closeModelHandler = (): void => {
    setIsModel(false)
  }

  const openModelHandler = (): void => {
    setIsModel(true)
  }

  return (
    <>
      <Header>
        <h3 className="subheader__title">{leftHeader}</h3>
        {rightHeader && (
          <div className="subheader__add" title="Add expenses">
            <Icon onClick={openModelHandler} />
          </div>
        )}
      </Header>

      <AddExpenses closeModelHandler={closeModelHandler} isModel={isModel} />
    </>
  )
}
