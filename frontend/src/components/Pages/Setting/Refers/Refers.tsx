import * as React from "react"
import Clipboard from "react-clipboard.js"
import { IRefered } from "../User/User"

interface Props {
  openSnackbarHandler: () => void
  refered: IRefered[] | undefined
  referedID: number | undefined
}

export const Refers: React.FC<Props> = ({
  openSnackbarHandler,
  refered,
  referedID,
}) => {
  const getLink = (): string => {
    openSnackbarHandler()
    return `https://zamalab.com/ref=${referedID}`
  }

  return (
    <div className="user__refered">
      <h2>
        You have invited{" "}
        <span className="user__number">
          {Array.isArray(refered) && refered.length}
        </span>{" "}
        company.
      </h2>
      <div className="user__reflink">
        <Clipboard
          option-text={getLink}
          component="a"
          button-href="javascript:void(0)"
          data-clipboard-text={getLink}
        >
          https://zamalab.com/ref={referedID}
        </Clipboard>
      </div>
    </div>
  )
}
