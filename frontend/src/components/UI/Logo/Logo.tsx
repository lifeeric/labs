import * as React from "react"
import { useState } from "react"

interface Props {}

export const Logo: React.FC<Props> = ({}) => {
  const [state, setState] = useState<boolean | undefined>(undefined)

  return <h1> Logo Component </h1>
}
