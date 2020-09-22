import * as React from "react"
import { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FiSend } from "react-icons/fi"
import { Search } from "../Search/Search"
import { HumBurger } from "../Burger/Burger"
import { LocalContext } from "../../../../utils/authorized"
import "./Header.scss"

export const Header: React.FC = () => {
  const { sidebar, toggleSidebar } = useContext(LocalContext)

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

  return (
    <header className="topbar">
      <div className="topbar__container">
        <div className="topbar__wrapper">
          <div className="topbar__search">
            <Search />
            <HumBurger isOpen={sidebar} clickMeDown={toggleSidebar} />
          </div>
          <div className="topbar__profile">
            <div className="topbar__invite" title="Invite your friends">
              <FiSend />
              Invite
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
