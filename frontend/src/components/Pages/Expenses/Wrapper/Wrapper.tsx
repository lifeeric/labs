import * as React from "react"
import { Lists } from "../Lists/Lists"

import "./Wrapper.scss"
import { Box } from "../../../UI/Box/Box"

interface Props {}

export const Wrapper: React.FC<Props> = ({}) => {
  return (
    <Box>
      <h3 className="wrapper__title">Today</h3>
      <div className="wrapper__divider"></div>
      <Lists />
    </Box>
  )
}
