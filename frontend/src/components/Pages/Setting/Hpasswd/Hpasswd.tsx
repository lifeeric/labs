import * as React from "react"
import { useEffect } from "react"
import { Input } from "../../Login/Input/Input"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { UPDATE_PASSWD } from "../../../../utils/gql"
import { customHook } from "../../../../utils/customHook"
import { useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"

interface Props {
  openSnackbarHandler: (msg: string) => void
  statusHandler: (message: string) => void
}

const inputfields = [
  {
    type: "password",
    label: "Old Password",
    placeholder: "*******",
    required: true,
  },
  {
    type: "password",
    label: "New Password",
    placeholder: "*******",
    required: true,
  },
  {
    type: "password",
    label: "Confirm Password",
    placeholder: "*******",
    required: true,
  },
]

export const Hpasswd: React.FC<Props> = ({
  openSnackbarHandler,
  statusHandler,
}) => {
  const [updatePasswd, { data, loading, error }] = useMutation(UPDATE_PASSWD)
  const { currentUser } = customHook()
  const { register, handleSubmit, watch, errors, reset } = useForm()

  useEffect(() => {
    if (!data) return
    if (data.updatePassword.message === "Password successfuly changed!") {
      openSnackbarHandler("Password has been changed successfully!")
      statusHandler("success")
      reset()
    }
    if (data.updatePassword.message === "Old password doen't match!")
      openSnackbarHandler("Old password doesn't match!"),
        statusHandler("danger")
    if (data.updatePassword.message === "New password doesn't matched")
      openSnackbarHandler("New password doesn't match!"),
        statusHandler("danger")
  }, [data])

  const onSubmit = (data: any) => {
    const newPassword = data["New Password"]
    const oldPassword = data["Old Password"]
    const newPasswordAgain = data["Confirm Password"]
    updatePasswd({
      variables: {
        id: currentUser._id,
        oldPassword,
        newPassword,
        newPasswordAgain,
      },
    })
  }

  return (
    <>
      <div className="user__hpasswd">
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputfields.map(input => (
            <Input {...input} register={register} key={input.label} />
          ))}

          <Button width="120px" type="primary" btnType={true}>
            Update
          </Button>
        </form>
      </div>
    </>
  )
}
