import * as React from "react"
import { MdMoreVert } from "react-icons/md"
import { useQuery, gql } from "@apollo/client"
import { RippleButton } from "react-ripple-effect"

import "./Lists.scss"
import ContentLoader from "../ContentLoader/ContentLoader"

const GET_EXPENSES_LIST = gql`
  query EXPENSES_LIST {
    getExpenses(id: "5f449b73e2ccbc43aa520488") {
      __typename
      ... on GetExpensesResult {
        id
        name
        description
        price
        date
      }

      ... on Error {
        error
        message
      }
    }
  }
`

interface Props {}

export const Lists: React.FC<Props> = ({}) => {
  const { data, loading, error } = useQuery(GET_EXPENSES_LIST)

  let renderingData = (
    <tr>
      <td>
        <ContentLoader />
      </td>
      <td>
        <ContentLoader />
      </td>
      <td>
        <ContentLoader />
      </td>
      <td>
        <ContentLoader />
      </td>
      <td>
        <ContentLoader />
      </td>
    </tr>
  )
  if (data)
    renderingData = data.getExpenses.map((item: any) => (
      <tr className="lists__row" key={item.id}>
        <td className="lists__date">{new Date(item.date).toLocaleString()}</td>
        <td className="lists__title">{item.name}</td>
        <td className="lists__description">{item.description}</td>
        <td className="lists__price">{item.price} PKR</td>
        <RippleButton>
          {/* <td className="lists__action">
            <MdMoreVert />
          </td> */}jlksd
        </RippleButton>
      </tr>
    ))

  return (
    <div className="lists">
      <table className="lists__table">
        {/* <tr className="lists__row">
          <td className="lists__date">12:12 AM</td>
          <td className="lists__title">Light</td>
          <td className="lists__description">
            Bought light for microscrope...
          </td>
          <td className="lists__price">120 pkr</td>
          <td className="lists__action">
            <MdMoreVert />
          </td>
        </tr> */}

        {renderingData}
        {/* 
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
        </tr> */}
      </table>
    </div>
  )
}
