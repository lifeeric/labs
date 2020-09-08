import * as React from "react"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { NavbarItem, NavbarLink } from "./NavbarItem/NavbarItem"

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
      to: "contact",
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
            <NavbarLink to="/login" text="Log In" />
            <li className="nav__item item--button">
              <Button type="primary" width="100px">
                Sign Up
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
