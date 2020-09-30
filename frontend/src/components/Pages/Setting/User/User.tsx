import * as React from "react"
import { useState, useEffect } from "react"
import { Box } from "../../../UI/Box/Box"
import { Input } from "../../Login/Input"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { Snackbar } from "../../../UI/Snackbar/Snackbar"
import "./User.scss"

interface Props {}

export const User: React.FC<Props> = ({}) => {
  const [snackbar, setSnackbar] = useState<boolean>(false)

  const openSnackbarHandler = (): void => setSnackbar(true)
  const closeSnackbarHandler = (): void => setSnackbar(false)

  useEffect(() => {
    snackbar &&
      setTimeout(() => {
        closeSnackbarHandler()
      }, 5010)
    return () => {}
  }, [snackbar])

  return (
    <>
      <Box>
        <div className="user">
          <div className="user__split">
            <div className="user__info">
              <Input label="Username" placeholder="Alex22" />
              <Input label="Full Name" placeholder="Abby" />
              <Input label="Email" placeholder="alex@exampel.com" />
              <Button width="120px" type="primary">
                Update
              </Button>
            </div>
          </div>
          <div className="user__split">
            <div className="user__hpasswd">
              <Input label="Current Password" placeholder="*******" />
              <Input label="New Password" placeholder="*******" />
              <Input label="Confirm Password" placeholder="*******" />
              <Button width="120px" type="primary">
                Update
              </Button>
            </div>
          </div>
        </div>
      </Box>
      <Snackbar
        text="Link copied to clipboard!"
        state={snackbar}
        closeSnackbar={closeSnackbarHandler}
      />
    </>
  )
}
