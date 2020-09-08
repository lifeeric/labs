import * as React from "react"
import { Link as LinkAni } from "react-scroll"
import { Link } from "gatsby"

import "./NavbarItem.scss"

interface Props {
  text: string
  to: string
  offset?: number
}

export const NavbarItem: React.FC<Props> = ({ text, to, offset }) => {
  return (
    <li className="nav__item">
      <LinkAni
        className="nav__link"
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        {text}
      </LinkAni>
    </li>
  )
}

export const NavbarLink: React.FC<Props> = ({ to, text }) => (
  <li className="nav__item">
    <Link to={to}>{text}</Link>
  </li>
)
