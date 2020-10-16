import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { SuccessAnimation } from "../../UI/SuccessAnimation/SuccessAnimation"
import { useLocation, useParams } from "@reach/router"
import { parse } from "query-string"
import { Form } from "./Form/Form"
import styled from "styled-components"

import "./ForgotPassword.scss"

type Props = {
  path: any
}

/**
 * Styled Components
 */
const MarginTop = styled.div`
  margin-top: 50px;
`

export const ForgotPassword: React.FC<Props> = () => {
  const [statusMessage, setStatusMessage] = useState()
  const [resetForm, setResetForm] = useState<boolean>(false)

  const params = useParams()
  const location = useLocation()

  useEffect(() => {
    if (parse(location.search).token) setResetForm(true)
  }, [])

  const statusMessageHandler = (msg: any): void => {
    setStatusMessage(msg)
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
        setStatus={statusMessageHandler}
        inputFields={inputForgotPassword}
      />
    </>
  )

  if (statusMessage)
    formContainer = (
      <>
        <SuccessAnimation />
        <div>
          <h3>Email Sent successfully!</h3>
          <p>
            if an email is registered in our system, You'll receive an email
            shortly.
          </p>
          <Link to="/app/login">Back to Log in</Link>
        </div>
      </>
    )

  if (resetForm)
    formContainer = (
      <>
        <h2>Enter Your new Passwrod</h2>
        <MarginTop>
          <Form
            inputFields={inputResetingPassword}
            setStatus={statusMessageHandler}
          />
        </MarginTop>
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
