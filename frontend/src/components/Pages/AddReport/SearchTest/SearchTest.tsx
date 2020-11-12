import * as React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    autocomplete: {
        marginBottom: theme.spacing(4)
    }
  })
)

interface Props {
  dropList: any[]
  addResult: (value: any) => void
}

export const SearchTest: React.FC<Props> = ({ addResult, dropList }) => {
  const classes = useStyles()
  return (
    <>
      <Autocomplete
        className={classes.autocomplete}
        id="combo-box-demo"
        onChange={(event, value) => addResult(value)}
        options={dropList}
        getOptionLabel={option => option.name}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Add Result" variant="outlined" />
        )}
      />
    </>
  )
}
