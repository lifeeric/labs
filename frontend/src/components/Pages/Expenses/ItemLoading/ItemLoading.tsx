import * as React from "react"
import ContentLoader from "../ContentLoader/ContentLoader"

export const ItemLoading: React.FC = React.memo(() => (
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
))
