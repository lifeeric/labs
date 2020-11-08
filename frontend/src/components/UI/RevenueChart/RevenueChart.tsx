import * as React from "react"
import { useState } from "react"
import { Line } from "react-chartjs-2"
import { Box } from "../Box/Box"
import { GET_CHART_DATA } from "../.../../../../utils/gql"
import { useQuery } from "@apollo/client"
import { customHook } from "../../../utils/customHook"

import "./RevenueChart.scss"
import { Filter } from "./Filter/Filter"

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
        showLines: true,
        gridLines: {
          display: true,
        },
        labels: {
          show: true,
        },
      },
    ],
  },
  maintainAspectRatio: false,
}

export const RevenueChart: React.FC = ({}) => {
  const [filter, setFilter] = useState<string>("Today")
  const { currentUser } = customHook()
  const { loading, data } = useQuery(GET_CHART_DATA, {
    variables: { id: currentUser._id, date: filter },
    fetchPolicy: "no-cache",
  })

  if (loading) return <p>Loading...</p>

  const reducer = (object: any, key: string) => {
    return object.reduce(
      (accumulator: number[], value: any) => accumulator.concat(value[key]),
      []
    )
  }

  /**
   * Collecting chart data of Expenses
   */
  let expensesChartData
  let chartLabels: number[] = []

  if (data) expensesChartData = reducer(data.getChartData, "totalPrice")
  console.log(data, " Get Chart Data")

  /**
   * Adding Labels
   */
  if (data && filter === "Today")
    chartLabels = data.getChartData.reduce(
      (accumulator: string[], value: any) =>
        accumulator.concat(new Date(value.id.date).toLocaleTimeString()),
      []
    )
  else if (data && filter !== "Today") {
    chartLabels = data.getChartData.reduce(
      (accumulator: string[], value: any) =>
        accumulator.concat(new Date(value.id.date).toLocaleString()),
      []
    )
    console.log(chartLabels, "Filter is not Today")
  }

  /**
   * validating, if the chart has no data or equal to 1
   */
  if (data && expensesChartData.length === 0) {
    expensesChartData.concat([0, 0])
  } else if (data && expensesChartData.length === 1) {
    expensesChartData.push(0)
    expensesChartData.unshift(0)
    console.log(chartLabels, " => chartLabes")
    chartLabels.push(0)
    chartLabels.unshift(0)
    console.log(chartLabels, " => chartLabes")
  }

  /**
   * Sum total cost
   */
  let totalExpensesCost =
    data &&
    data.getChartData.reduce(
      (accumulator: number, value: any) => accumulator + value.totalPrice,
      0
    )

  const chart_data = {
    labels: chartLabels,
    datasets: [
      {
        label: "# Sales",
        data: [1, 200, 1, 1],
        fill: true,
        backgroundColor: "rgba(40,199,111,0.1)",
        borderColor: "#28c76f",
        yAxisID: "y-axis-1",
      },
      {
        label: "# Expenses",
        data: expensesChartData,
        fill: true,
        backgroundColor: "rgba(219,68,55, 0.1)",
        borderColor: "#db4437",
        yAxisID: "y-axis-1",
      },
    ],
  }

  const filterHandler = (value: string): void => {
    setFilter(value)
  }

  return (
    <Box>
      <div className="revenue">
        <h3 className="revenue__title">Revenue</h3>
        <Filter filter={filter} setFilter={filterHandler} />
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
            }).format(totalExpensesCost || "00.00")}
          </span>
        </div>
      </div>
      <div className="revenue__chart">
        <Line height={350} data={chart_data} options={options} />
      </div>
    </Box>
  )
}
