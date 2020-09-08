import * as React from "react"
import { RowComp as Row, ColComp as Col } from "../../../UI/Col/Col"
import Join from "../../../../images/team.inline.svg"
import { ButtonComp as Button } from "../../../UI/Button/Button"

import "./About.scss"

export const About: React.FC = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <Row>
          <Col>
            <div className="about__banner">
              <Join />
            </div>
          </Col>
          <Col>
            <div className="about__content">
              <h1 className="about__title">About Our Company</h1>
              <p className="about__explain">
                We’re just getting started to offer you a product which our
                engineer build to solve the problem you’re facing on your jobs,
                companies. Our vision is to help companies develop their
                businesses. At the moment, we're no-profit company under two
                employee looker for engineer to folk this project.
              </p>
              <Button type="primary" width="120px" shadow={true}>
                Join Us
              </Button>
            </div>
          </Col>
        </Row>

        <div className="about__curve"></div>
      </div>
    </div>
  )
}
