import * as React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { ButtonComp as Button } from "../../UI/Button/Button"
import { Input } from "./Input"
import { gql, useLazyQuery } from "@apollo/client"
import { useLocalStorage } from "../../../utils/localStorage"
import { Warning } from "../../UI/Warning/Warning"
import { login } from "../../../utils/customHook"
import { navigate } from "gatsby"

import "./form.scss"

type Props = {
  formData: any
}

/**
 * GraphQL Query
 */
const LOGIN_QUERY = gql`
  query LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      __typename
      ... on LoginUserResult {
        _id
        email
        token
      }

      ... on Error {
        error
        message
      }
    }
  }
`

export const Form: React.FC<Props> = ({ formData }) => {
  const [getUser, setUser] = useLocalStorage()
  const [getLogin, { loading, error, data }] = useLazyQuery(LOGIN_QUERY)
  const [loginStatus, setLoginStatus] = useState<any>()
  const { register, handleSubmit, watch } = useForm()

  useEffect(() => {
    if (data) {
      setLoginStatus(data.login)
      login(data.login)
      if (data.login.__typename === "LoginUserResult") {
        setUser({
          _id: data.login._id,
          name: "",
          email: data.login.email,
          token: data.login.token,
        })
        navigate("/dashboard")
      }
    }
  }, [data])

  const onSubmit = (fdata: any): void => {
    getLogin({ variables: { email: fdata.Email, password: fdata.Password } })
  }

  return (
    <>
      {/* Registering new user */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {formData.map((ld: any) => (
          <Input key={ld.label} register={register} {...ld} />
        ))}

        {loginStatus && (
          <Warning
            message={String(loginStatus?.message)}
            log={loginStatus.error}
          />
        )}

        <Button btnType={true} type="primary" width="100px">
          Login
        </Button>
      </form>
    </>
  )
}
