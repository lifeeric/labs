import * as React from "react"
import { Lists } from "../Lists/Lists"

import "./Box.scss"

interface Props {}

export const Box: React.FC<Props> = ({}) => {
  return (
    <div className="box">
      <h3 className="box__title">Today</h3>
      <div className="box__divider"></div>
      <Lists />
    </div>
  )
}
