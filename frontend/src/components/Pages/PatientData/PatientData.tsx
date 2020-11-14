import * as React from "react"
import { useState } from "react"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { Header } from "../Dashboard/Header/Header"
import { MainContent } from "../../UI/MainContent/MainContent"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import { MdExpandMore } from "react-icons/md"
import { Box } from "../../UI/Box/Box"
import { useQuery } from "@apollo/client"
import { GET_REPORTS } from "../../../utils/gql"
import { customHook } from "../../../utils/customHook"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { Modal } from "./Modal/Modal"
import Loader from "./Loading/Loading"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    bold: {
      fontWeight: "bold",
    },
  })
)

export interface IReport {
  patient_name: string
  patient_id: number
  date: string
  patient_age: string
  patient_sex: string
  patient_referedby: string
  tests: TTests[]
}

export type TTests = {
  id: number
  name: string
  test: TATest[]
}

export type TATest = {
  test_name: string
  normalRanges: string
  unit: string
  results: string
}

export const PatientData: React.FC = () => {
  const classes = useStyles()
  const [isOpenModal, setIsOpenModal] = useState<IReport | undefined>()
  const { currentUser } = customHook()
  const { data, loading } = useQuery(GET_REPORTS, {
    variables: {
      id: currentUser._id,
    },
  })

  const modalHandler = (report: IReport) => {
    setIsOpenModal(report)
  }

  const onCloseHandler = () => {
    setIsOpenModal(undefined)
  }

  let renderContent: any =
    data &&
    data.getReports.map((report: IReport) => (
      <TableRow hover onClick={modalHandler.bind(null, report)}>
        <TableCell>{report.patient_id}</TableCell>
        <TableCell>{report.patient_name}</TableCell>
        <TableCell align="right">{report.patient_age}</TableCell>
        <TableCell align="right">{report.patient_sex}</TableCell>
        <TableCell align="right">
          {new Date(report.date).toLocaleString()}
        </TableCell>
        <TableCell align="right">{report.patient_referedby}</TableCell>
      </TableRow>
    ))

  if (loading)
    renderContent = [...new Array(2)].map(() => (
      <TableRow>
        <TableCell>
          <Loader />
        </TableCell>
        <TableCell>
          <Loader />
        </TableCell>
        <TableCell>
          <Loader />
        </TableCell>
        <TableCell>
          <Loader />
        </TableCell>
        <TableCell>
          <Loader />
        </TableCell>
        <TableCell>
          <Loader />
        </TableCell>
      </TableRow>
    ))

  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>

      <MainContent>
        <Box>
          <div className={classes.root}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.bold} align="left">
                      Patient's ID
                    </TableCell>
                    <TableCell className={classes.bold}>Name</TableCell>
                    <TableCell className={classes.bold} align="right">
                      Age
                    </TableCell>
                    <TableCell className={classes.bold} align="right">
                      Sex
                    </TableCell>
                    <TableCell className={classes.bold} align="center">
                      Date
                    </TableCell>
                    <TableCell className={classes.bold} align="right">
                      Refered by
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{renderContent}</TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </MainContent>

      <Modal isOpen={isOpenModal} onClose={onCloseHandler} />
    </>
  )
}
