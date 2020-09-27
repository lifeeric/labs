import * as React from "react"

import "./Input.scss"

type Inputs = {
  label: string
  placeholder: string
  type?: string
}

export const Input: React.FC<Inputs> = ({
  label,
  placeholder,
  type = "input",
}) => {
  return (
    <div className="textfield">
      <label htmlFor={label}>{label}</label>
      <input
        className="textfield__input"
        type={type}
        placeholder={placeholder}
        name={label}
      />
    </div>
  )
}
