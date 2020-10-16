import * as React from "react"
import { useEffect } from "react"
import { useLazyQuery } from "@apollo/client"
import { FORGOT_PASSWORD } from "../../../../utils/gql"
import { Input } from "../../Login/Input/Input"
import { useForm } from "react-hook-form"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import styled from "styled-components"

interface Props {
  setStatus: (msg: any) => void
  inputFields: any[]
}

type Inputs = {
  example: string
  exampleRequired: string
}

/**
 * styled components
 */

const TextLeft = styled.div`
  text-align: left;
`

export const Form: React.FC<Props> = ({ setStatus, inputFields }) => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>()
  const [getResetLink, { loading, data }] = useLazyQuery(FORGOT_PASSWORD, {
    fetchPolicy: "network-only",
  })
  console.log(data, loading, " => Query")

  useEffect(() => {
    if (!data) return
    setStatus(data.forgotPassword)
  }, [data])

  const onSubmit = (data: any) => {
    const email = data[" "]
    const newPassword = data["New Password"]
    const confirmPassword = data["Confirm Password"]
    getResetLink({ variables: { email } })
    console.log(newPassword, confirmPassword, email)
  }

  return (
    <div className="forgot__form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextLeft>
          {inputFields.map(input => (
            <Input key={input.label} {...input} />
          ))}
        </TextLeft>

        {errors.exampleRequired && <span>This field is required</span>}

        <Button btnType={true} type="primary" width="100%" isLoading={loading}>
          Submit
        </Button>
      </form>
    </div>
  )
}
