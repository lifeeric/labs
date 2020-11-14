import React, { useState } from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import { MdDelete } from "react-icons/md"
import { ITest, ATest } from "../../../../utils/tests"

import "./Test.scss"
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    bold: {
      fontWeight: "bold",
    },
    button: {
      fontSize: "1.3em",
    },
  })
)

interface Props {
  resultData: ITest[]
  changeResult: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    index: number
  ) => void
  filterResult: (id: number) => void
}

export const Test: React.FC<Props> = ({
  resultData,
  changeResult,
  filterResult,
}) => {
  const classes = useStyles()

  if (!resultData.length) return null

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.bold}>Test Name</TableCell>
              <TableCell className={classes.bold} align="right">
                Normal Range
              </TableCell>
              <TableCell className={classes.bold} align="right">
                Unit
              </TableCell>
              <TableCell className={classes.bold} align="center">
                Result
              </TableCell>
              <TableCell className={classes.bold} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultData.map((data: ITest, index: number) =>
              data.test.map((item: ATest, idx: number) => (
                <TableRow key={item.test_name}>
                  <TableCell component="th" scope="row">
                    {item.test_name}
                  </TableCell>
                  <TableCell align="right">{item.normalRanges}</TableCell>
                  <TableCell align="right">{item.unit}</TableCell>
                  <TableCell align="right">
                    <TextField
                      value={item.results}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        changeResult(e, index, idx)
                      }
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      color="primary"
                      className={classes.button}
                      onClick={filterResult.bind(null, data.id)}
                    >
                      <MdDelete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
