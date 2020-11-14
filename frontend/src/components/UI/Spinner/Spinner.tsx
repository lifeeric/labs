import React from "react"
import BeatLoader from "react-spinners/BeatLoader"
import { css } from "styled-components"

interface Props {
  loading: boolean
}

export const Spinner: React.FC<Props> = ({ loading }) => {
  if (!loading) return null

  return (
    <div
      className="sweet-loading"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <BeatLoader
        css={`
          display: block;
          margin: 2px;
          border-color: red;
          padding: 30px auto;
        `}
        size={15}
        color={"#123abc"}
        loading={loading}
      />
    </div>
  )
}
