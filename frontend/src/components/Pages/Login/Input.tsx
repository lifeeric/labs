import * as React from "react"

import "./Input.scss"

type Inputs = {
  label: string
  placeholder: string
  register?: any
  required?: boolean
  type?: string
}

export const Input: React.FC<Inputs> = ({
  label,
  placeholder,
  register,
  type = "input",
  required = false,
}) => {
  return (
    <div className="login__textfield">
      <label htmlFor={label}>{label}</label>
      <input
        className="login__input"
        type={type}
        placeholder={placeholder}
        ref={register && register({ required: required })}
        name={label}
      />
    </div>
  )
}
