import * as React from "react"
import { Link } from "react-scroll"

import "./Footer.scss"

interface Props {
  onClick?: () => void
  offset?: number
  to: string
  text: string
}

export const LinkItem: React.FC<Props> = ({ text, to, onClick, offset }) => {
  return (
    <li className="footer__link">
      <Link
        // onClick={onClick}
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        {text}
      </Link>
    </li>
  )
}
