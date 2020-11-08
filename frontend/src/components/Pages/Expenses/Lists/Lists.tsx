import * as React from "react"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_EXPENSES_LIST } from "../../../../utils/gql"
import { customHook } from "../../../../utils/customHook"
import { Model } from "../../../UI/Model/Model"
import { ItemLoading } from "../ItemLoading/ItemLoading"
import { ModelData } from "../ModelData/ModelData"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { HiDotsVertical } from "react-icons/hi"

import "./Lists.scss"

interface Props {}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    overflowX: "auto",
  },
  row: {
    cursor: "pointer",
  },
})

export const Lists: React.FC<Props> = React.memo(() => {
  const { currentUser } = customHook()
  const { data, loading, error } = useQuery(GET_EXPENSES_LIST, {
    variables: { id: currentUser._id },
    fetchPolicy: "network-only",
  })
  const [previousDays, setPreviousDays] = useState<boolean>(false)
  const [isShowedPreviousDays, setIsShowedPreviousDays] = useState<boolean>(
    false
  )
  const [isModel, setIsModel] = useState<boolean>(false)
  const [dataModel, setDataModel] = useState<any>(null)
  const classes = useStyles()

  if (error) return <p>Error</p>
  let items: any = <ItemLoading />
  const previousHTML = (
    <>
      <h3 className="wrapper__title">Previous Days</h3>
      <div className="wrapper__divider"></div>
    </>
  )

  if (data)
    items = [...data.getExpenses].reverse().map((item: any) => {
      return (
        <>
          <TableRow
            key={item.id}
            hover
            className={classes.row}
            onClick={() => openModelHandler(item)}
          >
            <TableCell component="th" scope="row">
              {new Date(item.date).toLocaleString()}
            </TableCell>
            <TableCell align="left">{item.name}</TableCell>
            <TableCell align="left">{item.description}</TableCell>
            <TableCell align="left">{item.price}</TableCell>
          </TableRow>
        </>
      )
    })

  if (data && data.getExpenses.length <= 0) {
    items = <p>Seem you don't have enough data yet!</p>
  }

  const openModelHandler = <T extends any>(data: T): void => {
    setIsModel(true)
    setDataModel(data)
  }

  const closeModelHandler = (): void => {
    setIsModel(false)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{items}</TableBody>
        </Table>
      </TableContainer>

      <Model isOpen={isModel} closeModel={closeModelHandler}>
        <ModelData
          dataModel={dataModel}
          closeModelHandler={closeModelHandler}
        />
      </Model>
    </>
  )
})
