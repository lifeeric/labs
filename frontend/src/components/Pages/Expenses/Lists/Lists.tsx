import * as React from "react"
import { MdMoreVert } from "react-icons/md"

import "./Lists.scss"

interface Props {}

export const Lists: React.FC<Props> = ({}) => {
  return (
    <div className="lists">
      <table className="lists__table">
        <tr className="lists__row">
          <td className="lists__date">12:12 AM</td>
          <td className="lists__title">Light</td>
          <td className="lists__description">
            Bought light for microscrope...
          </td>
          <td className="lists__price">120 pkr</td>
          <td className="lists__action">
            <MdMoreVert />
          </td>
        </tr>

        <tr className="lists__row">
          <td className="lists__date">08/12/018</td>
          <td className="lists__title">Light has been changed</td>
          <td className="lists__description">
            Bought light for microscrope...
          </td>
          <td className="lists__price">120 pkr</td>
          <td className="lists__action">
            <MdMoreVert />
          </td>
        </tr>
      </table>
    </div>
  )
}
