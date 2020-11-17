import * as React from "react"

import "./Input.scss"

type Inputs = {
  label: string
  placeholder: string
  register?: any
  required?: boolean
  type?: string
  value?: string
  onChange?: (e: any) => any
  refInput?: HTMLInputElement | React.RefObject<HTMLInputElement>
}

export const Input: React.FC<Inputs> = ({
  label,
  placeholder,
  register,
  type = "input",
  required = false,
  value,
  onChange,
  refInput,
}) => {
  return (
    <div className="login__textfield">
      <label htmlFor={label}>{label}</label>
      <input
        className="login__input"
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        ref={refInput || (register && register({ required: required }))}
        name={label}
        onChange={onChange}
      />
    </div>
  )
}
