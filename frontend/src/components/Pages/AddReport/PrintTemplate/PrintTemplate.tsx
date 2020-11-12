import * as React from "react"
import { Grid } from "@material-ui/core"

import "./PrintTemplate.scss"

interface IProps {
  name: string
  referedBy: string
  sex: string
  age: string
  PrintResult: React.ReactElement
}

export class ComponentToPrint extends React.Component<IProps> {
  state = {
    labName: "The BioTech Lab & research center",
  }
  render() {
    const { labName } = this.state
    const data = this.props
    return (
      <div className="template__container">
        <h1>{labName}</h1>
        <div className="template__patient">
          <Grid container>
            <Grid item sm={4}>
              <p className="template__name">Name: {data.name}</p>
              <p className="template__age">Age: 29</p>
            </Grid>
            <Grid item sm={4}>
              <p className="template__refered">Refered by: {data.referedBy}</p>
              <p className="template__sex">Sex: {data.sex}</p>
            </Grid>
            <Grid item sm={4}>
              <p className="template__date">
                Date:
                {new Date().toLocaleDateString("en", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Grid>
          </Grid>
        </div>
        <div>{data.PrintResult}</div>
      </div>
    )
  }
}
