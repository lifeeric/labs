import * as React from "react"
import { useState, useEffect } from "react"
import { Box } from "../../../UI/Box/Box"
import { Snackbar } from "../../../UI/Snackbar/Snackbar"
import { Refers } from "../Refers/Refers"
import "./User.scss"
import { Account } from "../Account/Account"
import { Hpasswd } from "../Hpasswd/Hpasswd"

interface Props {}
export interface IRefered {
  name: string
}

export const User: React.FC<Props> = ({}) => {
  const [referedUser, setReferedUser] = useState<IRefered[]>()
  const [snackbar, setSnackbar] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("Link copied to clipboard!")
  const [status, setStatus] = useState<string>("")
  const openSnackbarHandler = (msg: string = ""): void => {
    msg && setMessage(msg)
    setSnackbar(true)
  }
  const closeSnackbarHandler = (): void => setSnackbar(false)

  const statusHandler = (message: string): void => {
    setStatus(message)
  }

  const setReferedUserHandler = (users: IRefered[]): void => {
    setReferedUser(users)
  }

  useEffect(() => {
    snackbar &&
      setTimeout(() => {
        closeSnackbarHandler()
      }, 5000)
    return () => {}
  }, [snackbar])

  return (
    <>
      <Box>
        <div className="user">
          <div className="user__split">
            <Account
              openSnackbarHandler={openSnackbarHandler}
              statusHandler={statusHandler}
              setRefered={setReferedUserHandler}
            />
          </div>
          <div className="user__split">
            <Hpasswd
              openSnackbarHandler={openSnackbarHandler}
              statusHandler={statusHandler}
            />
          </div>
        </div>
      </Box>
      <Refers openSnackbarHandler={openSnackbarHandler} refered={referedUser} />
      <Snackbar
        text={message}
        state={status}
        isOpen={snackbar}
        closeSnackbar={closeSnackbarHandler}
      />
    </>
  )
}
