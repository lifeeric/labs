import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Form } from "./form"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import "./login.scss"

export const Login: React.FC = () => {
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
      placeholder: "Murad Ali",
      required: true,
    },
    {
      label: "Your Email",
      placeholder: "eg muradali@gmail.com",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "********",
      required: true,
    },
  ]

  return (
    <div className="login">
      <h1 className="login__greeting">Welcome back</h1>
      <div className="login__container">
        <div className="login__left">
          <Tabs>
            <div className="login__tab">
              <TabList>
                <Tab>Log In</Tab>
                <Tab>Sign Up</Tab>
              </TabList>
            </div>
            <div className="login__form">
              <TabPanel>
                <Form formData={loginData} />

                <div className="login__forgot">
                  <Link to="">Forgot password?</Link>
                </div>
              </TabPanel>
              <TabPanel>
                <Form formData={registerUser} />
              </TabPanel>
            </div>
          </Tabs>
        </div>

        <div className="login__right">
          <Img fixed={file.childImageSharp.fixed} />
        </div>
      </div>
    </div>
  )
}
