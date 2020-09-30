import * as React from "react"

import "./Box.scss"

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Box: React.FC<Props> = ({ children }) => {
  return <div className="box">{children}</div>
}
