import * as React from "react"

import "./Card.scss"

interface Props {
  title: String
  body: String
  icon: JSX.Element
}

export const Card: React.FC<Props> = ({ title, body, icon }) => (
  <div className="service__card">
    <div className="service__image">{icon}</div>
    <div className="service__body">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
)
