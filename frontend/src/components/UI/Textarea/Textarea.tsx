import * as React from "react"
import "./Textarea.scss"

interface Props {
  children: string
  placeholder: string
  register: any
}

export const Textarea: React.FC<Props> = ({
  placeholder,
  children,
  register,
}) => {
  return (
    <div className="textarea">
      <label htmlFor="textarea-des">{children}</label>
      <textarea
        placeholder={placeholder}
        id="textarea-des"
        ref={register({ required: true })}
        name="textareades"
      ></textarea>
    </div>
  )
}
