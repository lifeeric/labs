import * as React from "react"
import Ripples from "react-ripples"
import { MdMoreVert } from "react-icons/md"

interface Props {
  openModelHandler: () => void
  date: string
  name: string
  description: string
  price: string
}
const propsAreEqual = (prevProps: any, nextProps: any) => {
  return prevProps.id === nextProps.id && prevProps.date === nextProps.date
}

export const Item: React.FC<Props> = React.memo(
  ({ date, name, description, price, openModelHandler }) => {
    return (
      <>
        <td className="lists__date">{new Date(date).toLocaleString()}</td>
        <td className="lists__title">{name}</td>
        <td className="lists__description">{description}</td>
        <td className="lists__price">{price} PKR</td>

        <td className="lists__action">
          <Ripples>
            <MdMoreVert onClick={openModelHandler} />
          </Ripples>
        </td>
      </>
    )
  },
  propsAreEqual
)
