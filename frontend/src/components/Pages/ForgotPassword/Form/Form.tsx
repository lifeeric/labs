import * as React from "react"
import { useEffect, useState } from "react"
import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { FORGOT_PASSWORD, RESET_PASSWORD } from "../../../../utils/gql"
import { Input } from "../../Login/Input/Input"
import { useForm } from "react-hook-form"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import styled from "styled-components"
import { Warning } from "../../../UI/Warning/Warning"

interface Props {
  formSendingStatus: (msg: any) => void
  inputFields: any[]
  uniqid?: string | string[] | null
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

export const Form: React.FC<Props> = ({
  formSendingStatus,
  inputFields,
  uniqid,
}) => {
  const { register, handleSubmit, watch, errors, reset } = useForm<Inputs>()
  const [logWarningOpen, setLogWarningOpen] = useState<boolean>(false)
  const [logWarning, setLogWarning] = useState<boolean>(false)
  const [logWarningMessage, setLogWarningMessage] = useState<string>("")
  const [mutate, { data: reset_data, loading: reg_loading }] = useMutation(
    RESET_PASSWORD
  )
  const [getResetLink, { loading, data }] = useLazyQuery(FORGOT_PASSWORD, {
    fetchPolicy: "network-only",
  })

  useEffect(() => {
    /**
     * Sending Rest Link
     */
    if (data)
      formSendingStatus({
        title: data.forgotPassword.message,
        message:
          "if an email is registered in our system, You'll receive an email shortly.",
      })

    /**
     * Resetting Password
     */
    if (reset_data && reset_data.resetPassword === "Password doesn't match!") {
      setLogWarningOpen(true)
      setLogWarning(true)
      setLogWarningMessage(reset_data.resetPassword.message)
      return
    }

    if (reset_data && reset_data.resetPassword) {
      setLogWarningOpen(true)
      setLogWarning(false)
      setLogWarningMessage(reset_data.resetPassword.message)
      formSendingStatus({
        title: "Password has changed successfully!",
        message: "Now you can login to your account without any pain!",
      })
    }
  }, [data, reset_data])

  const onSubmit = (data: any) => {
    const email = data[" "]
    const newPassword = data["New Password"]
    const confirmPassword = data["Confirm Password"]

    if (email) getResetLink({ variables: { email } })
    else {
      if (newPassword !== confirmPassword) {
        setLogWarningOpen(true)
        setLogWarning(true)
        setLogWarningMessage("Password doesn't match!")
        return
      }

      mutate({
        variables: {
          id: uniqid,
          password: newPassword,
          passwordAgain: confirmPassword,
          ValidateURL: false,
        },
      })
    }
  }

  return (
    <>
      <div className="forgot__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextLeft>
            {inputFields.map(input => (
              <Input key={input.label} {...input} register={register} />
            ))}
          </TextLeft>

          {errors.exampleRequired && <span>This field is required</span>}

          <Warning
            isOpen={logWarningOpen}
            log={logWarning}
            message={logWarningMessage}
          />

          <Button
            btnType={true}
            type="primary"
            width="100%"
            isLoading={loading || reg_loading}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}
