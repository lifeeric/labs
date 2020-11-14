import * as React from "react"
import { useState } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import { IReport, TATest, TTests } from "../PatientData"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
  bold: {
    fontWeight: "bold",
  },
})

interface Props {
  isOpen: IReport | undefined
  onClose: () => void
}

export const Modal: React.FC<Props> = ({ isOpen, onClose }) => {
  const theme = useTheme()
  const classes = useStyles()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  if (!isOpen) return null

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={!!isOpen}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
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
                <TableCell className={classes.bold} align="right">
                  Result
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isOpen.tests.map((report: TTests) =>
                report.test.map((tst: TATest) => (
                  <TableRow key={tst.test_name}>
                    <TableCell component="th" scope="row">
                      {tst.test_name}
                    </TableCell>
                    <TableCell align="right">{tst.normalRanges}</TableCell>
                    <TableCell align="right">{tst.unit}</TableCell>
                    <TableCell align="right">{tst.results}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Dialog>
    </div>
  )
}
