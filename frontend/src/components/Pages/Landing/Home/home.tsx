import * as React from "react"
import { RowComp as Row, ColComp as Col } from "../../../UI/Col/Col"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import LabIcon from "../../../../images/concepthome.inline.svg"

import "./home.scss"

export default () => {
  return (
    <>
      <div className="landing" id="home">
        <div className="landing__container">
          <div className="landing__bgimage"></div>
          <Row>
            <Col>
              <div className="landing__content">
                <h1 className="landing__title">Automate Your Lab</h1>
                <p className="landing__explain">
                  Manage all your labs work in one place, no more hard writing,
                  no worries about data storing, monitor everything around you!
                </p>
                <Button type="secondary" width="120px" shadow={true}>
                  Try for Free
                </Button>
              </div>
            </Col>
            <Col>
              <div className="landing__banner">
                <div className="landing__labimage">
                  <LabIcon />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
