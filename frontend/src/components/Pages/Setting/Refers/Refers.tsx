
import * as React from "react"
import { useState } from "react"

interface Props {}

export const Refers: React.FC<Props> = ({}) => {
    const [state, setState] = useState<boolean | undefined>(undefined)

    return <h1> Refers Component </h1>
} 
