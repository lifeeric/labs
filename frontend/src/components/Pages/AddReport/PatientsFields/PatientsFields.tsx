import { Grid } from "@material-ui/core"
import * as React from "react"
import { useState } from "react"
import { Input } from "../../Login/Input/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      paddingTop: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    grid: {
      marginBottom: "-20px",
    },
  })
)

interface Props {
  sex: string
  name: string
  referedBy: string
  age: string
  cost: string
  nameHandler: (e: any) => void
  referedByHandler: (e: any) => void
  ageHandler: (e: any) => void
  costHandler: (e: any) => void
  handleChange: (e: any) => void
}

export const PatientsFields: React.FC<Props> = ({
  name,
  sex,
  age,
  cost,
  referedBy,
  nameHandler,
  ageHandler,
  referedByHandler,
  costHandler,
  handleChange,
}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6} sm={3} className={classes.grid}>
        <Input
          type="text"
          placeholder="Patient's name"
          onChange={nameHandler}
          label="Name"
        />
      </Grid>

      <Grid item xs={6} sm={3} className={classes.grid}>
        <Input
          type="text"
          label="Refered By"
          placeholder="Refered by"
          onChange={referedByHandler}
        />
      </Grid>

      <Grid item xs={6} sm={3} className={classes.grid}>
        <Input
          type="text"
          label="Age"
          placeholder="Age"
          onChange={ageHandler}
        />
      </Grid>

      <Grid item xs={6} sm={3} className={classes.grid}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sex</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sex}
            onChange={handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6} sm={3} className={classes.grid}>
        <Input
          type="text"
          label="Cost"
          placeholder="Cost"
          onChange={costHandler}
        />
      </Grid>
    </Grid>
  )
}
