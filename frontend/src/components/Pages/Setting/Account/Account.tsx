import * as React from "react"
import { useEffect } from "react"
import { Input } from "../../Login/Input/Input"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { GET_USER_SETTING, UPDATE_USER_SETTING } from "../../../../utils/gql"
import { useQuery, useMutation } from "@apollo/client"
import { customHook } from "../../../../utils/customHook"
import { useForm } from "react-hook-form"

interface Props {
  openSnackbarHandler: (msg: string) => void
  statusHandler: (message: string) => void
}

export const Account: React.FC<Props> = ({
  openSnackbarHandler,
  statusHandler,
}) => {
  const { currentUser } = customHook()
  const { register, handleSubmit, watch, errors, reset } = useForm()
  const { data, loading } = useQuery(GET_USER_SETTING, {
    variables: { id: currentUser._id },
    fetchPolicy: "cache-and-network",
  })
  const [mutate, { data: update_data, loading: update_loading }] = useMutation(
    UPDATE_USER_SETTING
  )

  useEffect(() => {
    if (
      update_data &&
      update_data.updateUserSetting.__typename === "GetUserSettingResult"
    ) {
      openSnackbarHandler("Profile has changed successfully!")
      statusHandler("success")
    }
  }, [update_data])

  if (loading) return <p>Error</p>

  const onSubmit = (fdata: any) => {
    const fullName = fdata["Full Name"]
    const company = fdata["Company"]
    const email = fdata["Email"]

    /**
     * and hit the api if the data is same
     */
    if (
      data.userSetting.name === fullName &&
      data.userSetting.company === company &&
      data.userSetting.email === email
    )
      return

    mutate({
      variables: {
        id: currentUser._id,
        name: fullName,
        company,
        email,
      },
    })
  }

  return (
    <>
      <div className="user__info">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Full Name"
            placeholder="Full Name, eg. Alex"
            value={data.userSetting.name}
            register={register}
          />
          <Input
            label="Company"
            placeholder="Company, eg. The BioTech"
            value={data.userSetting.company}
            register={register}
          />
          <Input
            label="Email"
            placeholder="Your Email, eg. example@gmail.com"
            value={data.userSetting.email}
            register={register}
          />
          <Button
            width="120px"
            type="primary"
            btnType={true}
            isLoading={loading || update_loading}
          >
            Update
          </Button>
        </form>
      </div>
    </>
  )
}
