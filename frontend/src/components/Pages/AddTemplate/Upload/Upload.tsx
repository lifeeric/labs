import * as React from "react"
import { useState } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { MdSave } from "react-icons/md"
import * as XLSX from "xlsx"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import { useMutation } from "@apollo/client"
import { CREATE_TEST_TEMPLATE } from "../../../../utils/gql"
import { useSnackbar } from "notistack"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    button: {
      margin: theme.spacing(1),
    },
    bold: {
      fontWeight: 800,
    },
    input: {
      display: "flex",
      justifyContent: "center",
      paddingTop: theme.spacing(5),
    },
  })
)

interface Props {}

export const Upload: React.FC<Props> = ({}) => {
  const classes = useStyles()
  const [items, setItems] = useState<any[]>()
  const [template, setTemplate] = useState<any>()
  const [mutate, { data, loading, error }] = useMutation(CREATE_TEST_TEMPLATE)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const readExcel = async (file: any) => {
    const fileReader = await new FileReader()
    fileReader.readAsArrayBuffer(file)

    fileReader.onload = (e: any) => {
      const bufferArray = e?.target.result
      const wb = XLSX.read(bufferArray, { type: "buffer" })
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]

      const data = XLSX.utils.sheet_to_json(ws)
      const fileName = file.name.split(".")[0]

      const newData = data.map((t: any) => {
        return {
          test_name: t.Test,
          normalRanges: t["Normal Ranges"],
          unit: t.Unit,
          results: String(t["Results"]),
        }
      })

      const template = {
        name: fileName,
        test: newData,
      }
      setTemplate(template)
      console.log(template)
      setItems(newData)
    }
  }

  const saveThisTemplateHandler = () => {
    if (!template) {
      enqueueSnackbar("Template Need to be upload!", { variant: "error" })
      return
    }
    mutate({
      variables: { name: template?.name, test: template?.test },
    })
  }

  React.useEffect(() => {
    if (!data) return
    enqueueSnackbar("Template has been upload successfully!", {
      variant: "success",
    })
  }, [data])

  return (
    <>
      <div className={classes.input}>
        <input
          type="file"
          onChange={(e: any) => {
            const file = e.target?.files[0]
            readExcel(file)
          }}
        />
      </div>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold}>Test Name</TableCell>
            <TableCell className={classes.bold} align="right">
              Normal Ranges
            </TableCell>
            <TableCell className={classes.bold} align="right">
              Unit
            </TableCell>
            <TableCell className={classes.bold} align="right">
              Results
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(items) &&
            items.map(reports => (
              <TableRow key={reports.test_name}>
                <TableCell component="th" scope="row">
                  {reports.test_name}
                </TableCell>
                <TableCell align="right">{reports.normalRanges}</TableCell>
                <TableCell align="right">{reports.unit}</TableCell>
                <TableCell align="right">{reports.results}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<MdSave />}
        onClick={saveThisTemplateHandler}
      >
        Save
      </Button>
    </>
  )
}
