import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { FiSend } from "react-icons/fi"
import { CgLogOff } from "react-icons/cg"
import { Search } from "../Search/Search"
import { HumBurger } from "../Burger/Burger"
import { toggleSidebar, customHook } from "../../../../utils/customHook"
import { useLocalStorage } from "../../../../utils/localStorage"
import { navigate } from "gatsby"

import "./Header.scss"

export const Header: React.FC = () => {
  const sidebar = customHook()
  const [getUser, setUser] = useLocalStorage()

  /**
   * Image
   */
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const logoutHandler = () => {
    setUser({})
    navigate('/')
  }

  return (
    <header className="topbar">
      <div className="topbar__container">
        <div className="topbar__wrapper">
          <div className="topbar__search">
            <Search />
            <HumBurger isOpen={sidebar.sidebar} clickMeDown={toggleSidebar} />
          </div>
          <div className="topbar__profile">
            {/* <div className="topbar__invite" title="Invite your friends"> */}
            {/* <FiSend />
              Invite */}
            {/* </div> */}
            <div className="topbar__logout" onClick={logoutHandler}>
              <CgLogOff />
            </div>
            <div className="topbar__image">
              <Img fixed={file.childImageSharp.fixed} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
