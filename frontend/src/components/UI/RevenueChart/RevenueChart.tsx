import * as React from "react"
import { Line } from "react-chartjs-2"
import { Box } from "../Box/Box"

import "./RevenueChart.scss"
import { Filter } from "./Filter/Filter"

const data = {
  labels: ["1", "2", "3", "4"],
  datasets: [
    {
      label: "# of Votes",
      data: [120, 100, 90, 110],
      fill: true,
      backgroundColor: "rgba(40,199,111,0.1)",
      borderColor: "#28c76f",
      yAxisID: "y-axis-1",
    },
    {
      label: "# of No Votes",
      data: [1, 2, 1, 1],
      fill: true,
      backgroundColor: "rgba(219,68,55, 0.1)",
      borderColor: "#db4437",
      yAxisID: "y-axis-2",
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear",
        display: false,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
  maintainAspectRatio: false,
}

export const RevenueChart: React.FC = ({}) => {
  return (
    <Box>
      <div className="revenue">
        <h3 className="revenue__title">Revenue</h3>
        <Filter />
        <div className="revenue__bill">
          <span className="revenue__month month--bold">This Month</span>
          <span className="revenue__cost cost--green">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "PKR",
            }).format(86589)}
          </span>
        </div>
        <div className="revenue__bill">
          <span className="revenue__month month--bold">
            This month expenses
          </span>
          <span className="revenue__cost cost--red">
            {" "}
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "PKR",
            }).format(86589)}
          </span>
        </div>
      </div>
      <div className="revenue__chart">
        <Line height={350} data={data} options={options} />
      </div>
    </Box>
  )
}
