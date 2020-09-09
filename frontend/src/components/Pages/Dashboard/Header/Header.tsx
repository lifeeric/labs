import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Header: React.FC = () => {
  /**
   * Image
   */
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="header__profile">
            <div className="header__invite"></div>
            <div className="header__image">
              <Img fixed={file.childImageSharp.fixed} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
