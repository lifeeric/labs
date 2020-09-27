import * as React from "react"
import { BackdropComp as Backdrop } from "../Backdrop/Backdrop"

import "./Model.scss"

interface Props {
  closeModel: () => void
  children: JSX.Element | JSX.Element[]
  isOpen: boolean
}

export const Model: React.FC<Props> = React.memo(
  ({ isOpen, children, closeModel }) => {
    if (!isOpen) return null

    return (
      <>
        <div className="model">
          <div className="model__container">{children}</div>
        </div>
        <Backdrop isTrue={true} onClick={closeModel} />
      </>
    )
  }
)
