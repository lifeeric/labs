import * as React from "react"
import { Input } from "../../Login/Input/Input"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { GET_USER_SETTING } from "../../../../utils/gql"
import { useQuery } from "@apollo/client"
import { customHook } from "../../../../utils/customHook"

interface Props {}

export const Account: React.FC<Props> = ({}) => {
  const { currentUser } = customHook()
  const { data, loading } = useQuery(GET_USER_SETTING, {
    variables: { id: currentUser._id },
  })

  if(loading) return <p>Error</p>

  return (
    <>
      <div className="user__info">
        <Input label="Full Name" placeholder="Full Name, eg. Alex" value={data.userSetting.name} />
        <Input label="Company" placeholder="Company, eg. The BioTech" value={data.userSetting.company} />
        <Input label="Email" placeholder="Your Email, eg. example@gmail.com" value={data.userSetting.email} />
        <Button width="120px" type="primary">
          Update
        </Button>
      </div>
    </>
  )
}
