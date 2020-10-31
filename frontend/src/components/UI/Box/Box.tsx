import * as React from "react"

import "./Box.scss"

interface Props {
  children: JSX.Element | JSX.Element[]
  margin?: boolean
}

export const Box: React.FC<Props> = ({ children, margin }) => {
  return <div className={`box ${margin && "box--margin"}`}>{children}</div>
}
