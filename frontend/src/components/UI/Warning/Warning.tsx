import * as React from "react"
import { useState } from "react"
import "./Warning.scss"

interface Props {
  log: boolean
  message: string
  isOpen: boolean
}

export const Warning: React.FC<Props> = ({ log, message, isOpen }) => {
  const [state, setState] = useState<boolean | undefined>(undefined)

  if (!isOpen) return null

  return (
    <div className={`warning ${log || "success"}`}>
      <p>
        <strong>{log ? "Warning" : "Success"} </strong>: {message}
      </p>
    </div>
  )
}
