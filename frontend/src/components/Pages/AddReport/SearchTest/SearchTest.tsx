import * as React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { customHook } from "../../../../utils/customHook"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    autocomplete: {
      marginBottom: theme.spacing(4),
    },
  })
)

interface Props {
  addNewReport: (value: any) => void
}

export const SearchTest: React.FC<Props> = ({ addNewReport }) => {
  const classes = useStyles()
  const { tests } = customHook()

  return (
    <>
      <Autocomplete
        className={classes.autocomplete}
        id="combo-box-demo"
        onChange={(event, value) => addNewReport(value)}
        options={tests}
        clearText="TESTME"
        closeText="TEST"
        getOptionLabel={(option: any) => option!.name}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Add Result" variant="outlined" />
        )}
      />
    </>
  )
}
