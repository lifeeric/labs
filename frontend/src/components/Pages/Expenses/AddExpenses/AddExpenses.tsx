import * as React from "react"
import { Model } from "../../../UI/Model/Model"
import { Input } from "../../Login/Input"
import { SimpleButton } from "../../../UI/SimpleButton/SimpleButton"
import styled from "styled-components"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { Textarea } from "../../../UI/Textarea/Textarea"
import { useForm } from "react-hook-form"

interface Props {
  closeModelHandler: () => void
  isModel: boolean
}

interface Iinput {
  label: string
  placeholder: string
  register: any
  type?: string
  required: boolean
}

const Center = styled.div`
  margin: auto;
  max-width: 400px;
  margin-top: 20px;
`

const Left = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AddExpenses: React.FC<Props> = ({
  closeModelHandler,
  isModel,
}) => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (values: any) => console.log(values)

  const inputs: Array<Iinput> = [
    {
      label: "Title",
      placeholder: "Bought something",
      register: register,
      required: true,
    },
    {
      label: "Date",
      placeholder: "2020-09-04T02:36",
      register: register,
      type: "datetime-local",
      required: true,
    },
    {
      label: "Price",
      placeholder: "120",
      register: register,
      required: true,
    },
  ]

  return (
    <Model isOpen={isModel} closeModel={closeModelHandler}>
      <Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((int: Iinput) => (
            <Input key={int.label} {...int} />
          ))}

          <Textarea
            register={register}
            placeholder="the old thing was pretty bad so I had to change it"
          >
            Description
          </Textarea>
          <Left>
            <SimpleButton onClick={closeModelHandler} />
            <Button width="100px" btnType={true}>
              Add
            </Button>
          </Left>
        </form>
      </Center>
    </Model>
  )
}
