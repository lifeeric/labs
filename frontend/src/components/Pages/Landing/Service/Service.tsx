import * as React from "react"
import { RowComp as Row, ColComp as Col } from "../../../UI/Col/Col"
import Analytics from "../../../../images/analytics.inline.svg"
import Reports from "../../../../images/reports.inline.svg"
import Search from "../../../../images/search.inline.svg"
import Safe from "../../.././../images/safe.inline.svg"
import { Card } from "./Card"

import "./Service.scss"

export const Service: React.FC = () => {
  const cards = [
    {
      title: "Data Monitoring",
      body:
        "Track your expenses, data and result in one place. giving you the montly, daily and even yearly result!",
      icon: <Analytics />,
    },
    {
      title: "Generate Result",
      body: "Print out new report for patient and keept it safe",
      icon: <Reports />,
    },
    {
      title: "Look up data",
      body: "Discover the old data you saved",
      icon: <Search />,
    },
    {
      title: "Safe & private",
      body:
        " Your data is private and secure, so you don’t need to worry about it",
      icon: <Safe />,
    },
  ]

  return (
    <div className="service" id="services">
      <div className="service__container">
        <h1 className="service__title">Services We Offer</h1>

        <div className="service__wrapper">
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}
