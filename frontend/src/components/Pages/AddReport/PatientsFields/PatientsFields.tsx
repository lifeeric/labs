import { Grid } from "@material-ui/core"
import * as React from "react"
import { useState, RefObject } from "react"
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
      boxSizing: "border-box",
      width: "97%",
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
  nameRef: HTMLInputElement | React.RefObject<HTMLInputElement>
  ageRef: HTMLInputElement | React.RefObject<HTMLInputElement>
  referedByRef: HTMLInputElement | React.RefObject<HTMLInputElement>
  PIDRef: HTMLInputElement | React.RefObject<HTMLInputElement>
  costRef: HTMLInputElement | React.RefObject<HTMLInputElement>
  sexHandler: (event: React.ChangeEvent<{ value: unknown }>) => void
}

export const PatientsFields: React.FC<Props> = ({
  nameRef,
  ageRef,
  referedByRef,
  costRef,
  sexHandler,
  PIDRef,
}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6} sm={4} className={classes.grid}>
        <Input
          type="text"
          placeholder="eg. 28329"
          refInput={PIDRef}
          label="Patient's ID (optional)"
        />
      </Grid>

      <Grid item xs={6} sm={4} className={classes.grid}>
        <Input
          type="text"
          placeholder="Patient's name"
          refInput={nameRef}
          label="Name"
        />
      </Grid>

      <Grid item xs={6} sm={4} className={classes.grid}>
        <Input
          type="text"
          label="Refered By"
          placeholder="Refered by"
          refInput={referedByRef}
        />
      </Grid>

      <Grid item xs={6} sm={4} className={classes.grid}>
        <Input type="text" label="Age" placeholder="Age" refInput={ageRef} />
      </Grid>

      <Grid item xs={6} sm={4} className={classes.grid}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sex</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={sexHandler}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6} sm={3} className={classes.grid}>
        <Input type="text" label="Cost" placeholder="Cost" refInput={costRef} />
      </Grid>
    </Grid>
  )
}
