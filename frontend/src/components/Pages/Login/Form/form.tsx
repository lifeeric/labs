import * as React from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { Input } from "../Input/Input"
import { useLazyQuery, useMutation } from "@apollo/client"
import { LOGIN_QUERY, REGISTER_USER } from "../../../../utils/gql"
import { useLocalStorage } from "../../../../utils/localStorage"
import { login } from "../../../../utils/customHook"
import { navigate } from "gatsby"

import "./form.scss"

type Props = {
  formData: any
  isForm: string | null
  buttonLabel: string
  openSnackbar: (msg: string, status?: string) => void
}

export const Form: React.FC<Props> = ({
  formData,
  isForm,
  buttonLabel,
  openSnackbar,
}) => {
  const [getUser, setUser] = useLocalStorage()
  const [getLogin, { loading, error, data }] = useLazyQuery(LOGIN_QUERY)
  const [addUser, { data: reg_data, loading: reg_loading }] = useMutation(
    REGISTER_USER
  )
  const { register, handleSubmit, watch, reset } = useForm()

  useEffect(() => {
    if (data) {
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
      if(data.login.__typename === "Error") {
        openSnackbar(
          "User don't exist in our system!",
          "danger"
        )
      }
    }

    // For Registration
    if (reg_data) {
      if (reg_data.createUser.__typename === "UserResult") {
        openSnackbar(
          "User successfully registered!",
          "success"
        )
        reset()
      } else openSnackbar(reg_data.createUser.message)
    }
  }, [data, reg_data])

  const onSubmit = (fdata: any): void => {
    if (isForm === "login")
      getLogin({ variables: { email: fdata.Email, password: fdata.Password } })
    else
      addUser({
        variables: {
          name: fdata["Full Name"],
          email: fdata["Your Email"],
          password: fdata.Password,
        },
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formData.map((ld: any) => (
        <Input key={ld.label} register={register} {...ld} />
      ))}

      {/* {loginStatus && (
        <Warning
          message={String(loginStatus?.message)}
          log={loginStatus.error}
        />
      )} */}

      <Button
        btnType={true}
        type="primary"
        width="100px"
        isLoading={reg_loading || loading}
      >
        {buttonLabel}
      </Button>
    </form>
  )
}
