import * as React from "react"
import Clipboard from "react-clipboard.js"
import { IRefered } from "../User/User"

interface Props {
  openSnackbarHandler: () => void
  refered: IRefered[] | undefined
}

export const Refers: React.FC<Props> = ({ openSnackbarHandler, refered }) => {
  console.log(refered, " => Refered ")
  const getText = (): string => {
    openSnackbarHandler()
    return "https://example.com/ref=233"
  }

  return (
    <div className="user__refered">
      <h2>
        Your refered{" "}
        <span className="user__number">
          {/* {Array.isArray(reefered) && refered.length} */}
        </span>
      </h2>
      <div className="user__reflink">
        <Clipboard
          option-text={getText}
          component="a"
          button-href="javascript:void(0)"
          data-clipboard-text="https://example.com/ref=233"
        >
          https://example.com/ref=233
        </Clipboard>
      </div>
    </div>
  )
}
