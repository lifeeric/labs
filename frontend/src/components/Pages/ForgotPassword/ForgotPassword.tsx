import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { SuccessAnimation } from "../../UI/SuccessAnimation/SuccessAnimation"
import { useLocation } from "@reach/router"
import { updateToken } from "../../../utils/customHook"
import { parse } from "query-string"
import { Form } from "./Form/Form"
import styled from "styled-components"
import { useMutation } from "@apollo/client"
import { RESET_PASSWORD } from "../../../utils/gql"

import "./ForgotPassword.scss"

type Props = {
  path: any
}

type TFormStatus = {
  title: string
  message?: string
}

/**
 * Styled Components
 */
const MarginTop = styled.div`
  margin-top: 50px;
`

export const ForgotPassword: React.FC<Props> = () => {
  const [formSendingStatus, setformSendingStatusMsg] = useState<TFormStatus>()
  const [resetForm, setResetForm] = useState<boolean>(false)
  const location = useLocation()
  const [mutate, { data, loading, error }] = useMutation(RESET_PASSWORD)

  const token = parse(location.search).token || ""
  const uniqid = parse(location.search).uniqid
  token && updateToken(token)
  token &&
    !formSendingStatus &&
    mutate({ variables: { id: uniqid, validateURL: true } })

  useEffect(() => {
    if (token) {
      setResetForm(true)
    }
  }, [])

  const formSendingStatusHandler = (msg: any): void => {
    setformSendingStatusMsg(msg)
  }

  let formContainer = (
    <>
      <div className="forgot__info">
        <h2>Rest Password</h2>
        <p>
          Please enter your email address and we'll send you a link to reset
          password!
        </p>
      </div>
      <Form
        formSendingStatus={formSendingStatusHandler}
        inputFields={inputForgotPassword}
      />
    </>
  )

  if (formSendingStatus)
    formContainer = (
      <>
        <SuccessAnimation animation="success" />
        <div>
          <h3>{formSendingStatus.title}</h3>
          <p>{formSendingStatus.message}</p>
          <Link to="/app/login">Back to Log in</Link>
        </div>
      </>
    )
  else if (resetForm)
    formContainer = (
      <>
        <h2>Enter Your new Passwrod</h2>
        <MarginTop>
          <Form
            inputFields={inputResetingPassword}
            formSendingStatus={formSendingStatusHandler}
            uniqid={uniqid}
          />
        </MarginTop>
      </>
    )

  if (loading) return <h1>Loading....</h1>
  else if (data && data.resetPassword.error)
    formContainer = (
      <>
        <SuccessAnimation animation="failed" />
        <div>
          <h3>Oops, looks like Link has been expired!</h3>

          <Link to="/app/login">Back to Log in</Link>
        </div>
      </>
    )

  return (
    <div className="forgot">
      <div className="forgot__container">{formContainer}</div>
    </div>
  )
}

/**
 * Input field for forgot password
 */

const inputForgotPassword = [
  {
    label: " ",
    placeholder: "eg. alex@gmail.com",
    required: true,
  },
]

/**
 * Input fields for Reseting Password
 */
const inputResetingPassword = [
  {
    label: "New Password",
    type: "password",
    placeholder: "*******",
    required: true,
  },
  {
    label: "Confirm Password",
    type: "password",
    placeholder: "*******",
    required: true,
  },
]
