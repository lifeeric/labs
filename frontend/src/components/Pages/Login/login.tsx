import * as React from "react"
import { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Form } from "./Form/form"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Snackbar } from "../../UI/Snackbar/Snackbar"

import "react-tabs/style/react-tabs.css"
import "./login.scss"

type Props = {
  path: any
}

export const Login: React.FC<Props> = () => {
  const [setupForm, setSetupForm] = useState<string>("")
  const [status, setStatus] = useState<string>()
  const [message, setMessage] = useState<string>("")
  const [snackbar, setSnackbar] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setSnackbar(false), 5000)
  }, [snackbar])

  // fetching image
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "login.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 461, height: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const detectorForm = (val: string) => {
    setSetupForm(val)
  }

  const openSnackbarHanlder = (msg: string, status?: string): void => {
    setSnackbar(true)
    setMessage(msg)
    setStatus(status || "danger")
  }
  const closeSnackbarHandler = (): void => setSnackbar(false)

  return (
    <>
      <div className="login">
        <h1 className="login__greeting">Welcome back</h1>
        <div className="login__container">
          <div className="login__left">
            <Tabs>
              <div className="login__tab">
                <TabList>
                  <Tab onClick={detectorForm.bind(null, "login")}>Log In</Tab>
                  <Tab onClick={detectorForm.bind(null, "signup")}>Sign Up</Tab>
                </TabList>
              </div>
              <div className="login__form">
                <TabPanel>
                  <Form
                    openSnackbar={openSnackbarHanlder}
                    isForm={setupForm}
                    formData={loginData}
                    buttonLabel="Login"
                  />

                  <div className="login__forgot">
                    <Link to="/app/forgot-password">Forgot password?</Link>
                  </div>
                </TabPanel>
                <TabPanel>
                  <Form
                    openSnackbar={openSnackbarHanlder}
                    isForm={setupForm}
                    formData={registerUser}
                    buttonLabel="Register"
                  />
                </TabPanel>
              </div>
            </Tabs>
          </div>

          <div className="login__right">
            <Img fixed={file.childImageSharp.fixed} />
          </div>
        </div>
      </div>

      <Snackbar
        isOpen={snackbar}
        text={message}
        state={status}
        closeSnackbar={closeSnackbarHandler}
      />
    </>
  )
}

/*
 * login Data
 */
const loginData = [
  {
    label: "Email",
    placeholder: "youremail@example.com",
    required: true,
  },
  {
    label: "Password",
    type: "password",
    placeholder: "********",
    required: true,
  },
]

/**
 * registering new user
 */
const registerUser = [
  {
    label: "Full Name",
    placeholder: "Alex ",
    required: true,
  },
  {
    label: "Your Email",
    placeholder: "eg. example@gmail.com",
    required: true,
  },
  {
    label: "Password",
    type: "password",
    placeholder: "********",
    required: true,
  },
]
