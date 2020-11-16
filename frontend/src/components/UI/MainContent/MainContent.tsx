import * as React from "react"

import "./MainContent.scss"

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MainContent: React.FC<Props> = ({ children }) => {
  return (
    <div className="content">
      <div className="content__container">{children}</div>
    </div>
  )
}
