import * as React from "react"
import { useState } from "react"
import { MdFilterList } from "react-icons/md"
import Ripple from "react-ripples"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Fade from "@material-ui/core/Fade"

interface Props {}

export const Filter: React.FC<Props> = ({}) => {
  const [filter, setFilter] = useState<string | undefined>(undefined)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<any>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const filterHandler = (value: string) => {
    console.log(value)
    handleClose()
  }

  return (
    <div className="revenue__filter">
      <div className="revenue__circle">
        <Ripple>
          <MdFilterList onClick={handleClick} />
        </Ripple>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {["Yesterday", "This Month", "Previous Month"].map(f => (
            <MenuItem key={f} onClick={filterHandler.bind(null, f)}>
              {f}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  )
}
