import * as React from "react"
import { useForm } from "react-hook-form"
import { ButtonComp as Button } from "../../UI/Button/Button"
import { Input } from "./Input"

import "./form.scss"

type Props = {
  formData: any
}

export const Form: React.FC<Props> = ({ formData }) => {
  const { register, handleSubmit, watch } = useForm()
  const onSubmit = (data: any) => console.log(data)

  console.log(watch("example"))
  // watch input value by passing the name of it

  return (
    <>
      {/* Registering new user */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {formData.map((ld: any) => (
          <Input key={ld.label} register={register} {...ld} />
        ))}

        <Button btnType={true} type="primary" width="100px">
          Login
        </Button>
      </form>
    </>
  )
}
