import * as React from "react"
import { useState } from "react"
import { Input } from "../../Login/Input/Input"
import { useForm } from "react-hook-form"
interface Props {}

export const Moveable: React.FC<Props> = ({}) => {
  const [state, setState] = useState<boolean | undefined>(undefined)
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Id eg 532343" register={register} type="text" />
      </form>
    </div>
  )
}
