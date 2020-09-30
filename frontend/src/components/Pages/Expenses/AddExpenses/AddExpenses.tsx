import * as React from "react"
import { useState, useEffect } from "react"
import { Model } from "../../../UI/Model/Model"
import { Input } from "../../Login/Input"
import { SimpleButton } from "../../../UI/SimpleButton/SimpleButton"
import styled from "styled-components"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { Textarea } from "../../../UI/Textarea/Textarea"
import { useForm } from "react-hook-form"
import { ADD_NEW_EXPENSES, GET_EXPENSES_LIST } from "../../../../utils/gql"
import { useMutation } from "@apollo/client"
import { customHook } from "../../../../utils/customHook"
import { VscLoading } from "react-icons/vsc"
import { Snackbar } from "../../../UI/Snackbar/Snackbar"

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

const Spinning = styled(VscLoading)`
  animation: icon-spin 2s infinite linear;

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`

export const AddExpenses: React.FC<Props> = ({
  closeModelHandler,
  isModel,
}) => {
  const { handleSubmit, register, errors } = useForm()
  const { currentUser } = customHook()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [snackbar, setSnackbar] = useState<boolean>(false)
  const [addExpense, { data, loading }] = useMutation(ADD_NEW_EXPENSES, {
    refetchQueries: [
      {
        query: GET_EXPENSES_LIST,
        variables: { id: currentUser._id },
      },
    ],
  })

  const openSnackbarHandler = (): void => setSnackbar(true)
  const closeSnackbarHandler = (): void => setSnackbar(false)

  useEffect(() => {
    data && closeModelHandler()
    data && openSnackbarHandler()
    data &&
      setTimeout(() => {
        closeSnackbarHandler()
      }, 5010)
    return () => {}
  }, [data])

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

  const onSubmit = async (values: any) => {
    addExpense({
      variables: {
        id: currentUser._id,
        name: values.Title,
        price: Number(values.Price),
        description: values.textareades,
        date: values.Date,
      },
    })
  }

  return (
    <>
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
                {loading ? <Spinning /> : "Add"}
              </Button>
            </Left>
          </form>
        </Center>
      </Model>
      <Snackbar
        state={snackbar}
        text="Item Successfully added!"
        closeSnackbar={closeSnackbarHandler}
      />
    </>
  )
}
