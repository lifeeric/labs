import * as React from "react"

import { Link } from "gatsby"
import "./SidebarLink.scss"

interface Props {
  to: string
  text: string
  icon: JSX.Element | JSX.Element[]
  clx?: string
}

export const SidebarLink: React.FC<Props> = ({ icon, text, to, clx }) => {
  return (
    <li className={`sidebar__item ${clx && clx}`} title={text}>
      <Link activeClassName="active" className="sidebar__link" to={to}>
        <span className="sidebar__icon">{icon}</span>
        <span className="sidebar__placeholder">{text}</span>
      </Link>
    </li>
  )
}
