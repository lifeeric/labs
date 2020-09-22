import * as React from "react"
import { useForm } from "react-hook-form"
import { ButtonComp as Button } from "../../UI/Button/Button"
import { Input } from "./Input"
import { gql, useLazyQuery } from "@apollo/client"

import "./form.scss"

type Props = {
  formData: any
}

/**
 * GraphQL Query
 */
const LOGIN_QUERY = gql`
  {
    login(email: "alex@test.com", password: "alex") {
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
  // useQuery
  const [getLogin, { loading, error, data }] = useLazyQuery(LOGIN_QUERY)

  const { register, handleSubmit, watch } = useForm()
  const onSubmit = (fdata: any) => {
    console.log(fdata)
    getLogin()
    console.log(data, ' Apollo')
  }

  console.log(watch("example"))
  // watch input value by passing the name of it

  return (
    <>
      {/* Registering new user */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {formData.map((ld: any) => (
          <Input key={ld.label} register={register} {...ld} />
        ))}

        <Button btnType={true} type="primary" width="100px">
          Login
        </Button>
      </form>
    </>
  )
}
