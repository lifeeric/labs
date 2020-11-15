import * as React from "react"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { NavbarItem, NavbarLink } from "./NavbarItem/NavbarItem"
import { navigate } from "gatsby"

import "./Navbar.scss"

interface Props {
  sideDrawer: Boolean
}

export const Navbar: React.FC<Props> = ({ sideDrawer }) => {
  const links = [
    {
      text: "Home",
      offset: -70,
      to: "home",
    },
    {
      text: "Services",
      offset: -70,
      to: "services",
    },
    {
      text: "About",
      offset: -70,
      to: "about",
    },
    {
      text: "Contact",
      offset: -70,
      to: "https://ericgit.me/#contact",
    },
  ]

  return (
    <nav className="nav__nav">
      <ul
        className={`nav__list nav--mobile ${
          sideDrawer ? "nav--open" : "nav--close"
        }`}
      >
        {links.map(link => (
          <NavbarItem key={link.text} {...link} />
        ))}

        <li className="nav__item nav--right">
          <ul className="nav__list">
            <NavbarLink to="/app/login" text="Log In" />
            <li className="nav__item item--button">
              <Button type="primary" width="100px" onClick={registerHandler}>
                Sign Up
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export const registerHandler = () => {
  navigate("/app/login")
}
