import React from "react"
import { Parallax, Background } from "react-parallax"
import { ButtonComp as Button } from "../../../UI/Button/Button"

import "./parallax.scss"

const MyComponent = () => {
  return (
    <div>
      {/* -----basic config-----*/}
      <Parallax
        blur={{ min: -10, max: 15 }}
        bgImage={require("../../../../images/parallax3.jpg")}
        bgImageAlt="bio"
        strength={-100}
      >
        <div className="parallax">
          <h1>a key to a future</h1>
          <Button type="secondary" shadow={true} width="150px">
            Sign Up
          </Button>
        </div>
      </Parallax>
    </div>
  )
}
export default MyComponent
