import * as React from "react"
import { navigate } from "gatsby"
import { RouteComponentProps } from "@reach/router"
import { customHook } from "../../../utils/customHook"

type Props = {
  component: React.FC
} & RouteComponentProps

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  location,
  ...rest
}) => {
  const { currentUser } = customHook()
  const isLoggedIn = !!currentUser.email
  if (!isLoggedIn) {
    navigate("/login")
    return null
  }

  return <Component {...rest} />
}
