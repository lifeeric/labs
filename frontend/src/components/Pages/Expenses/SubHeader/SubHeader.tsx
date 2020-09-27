import * as React from "react"
import { useState } from "react"
import { MdAddCircle } from "react-icons/md"
import styled from "styled-components"
import { Model } from "../../../UI/Model/Model"
import { Input } from "../../Login/Input"

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
  color: #4a5bbf;
`

const Center = styled.div`
  margin: auto;
`

export const SubHeader: React.FC<Props> = () => {
  const [isModel, setIsModel] = useState<boolean>(false)

  return (
    <>
      <Header>
        <h3 className="subheader__title">All Expenses</h3>
        <div className="subheader__add" title="Add expenses">
          <Icon />
        </div>
      </Header>

      {/* <Model closeModel={() => {}}>
        <Center>
          <Input label="Title" placeholder="Bought something" />
          <Input type="datetime-local" label="Date" placeholder="12/09/2020" />
          <Input label="Price" placeholder="120" />
          <Input
            label="Description"
            placeholder="the old thing was pretty bad so I had  to change it"
          />
        </Center>
      </Model> */}
    </>
  )
}
