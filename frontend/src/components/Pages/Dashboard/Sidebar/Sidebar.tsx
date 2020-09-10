import * as React from "react"
import { MdDashboard } from "react-icons/md"
import { MdNoteAdd } from "react-icons/md"
import { RiFileUserFill } from "react-icons/ri"
import { SiGoogleanalytics } from "react-icons/si"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { MdHelp } from "react-icons/md"

import "./Sidebar.scss"
import { Link } from "gatsby"
import { Logo } from "../../../UI/Logo/Logo"

interface Props {}

export const Sidebar: React.FC<Props> = () => {
  return (
    <div className="sidebar">
      <Logo />
      <ul className="sidebar__list">
        <li className="sidebar__item active">
          <MdDashboard />
          <Link className="sidebar__link" to="">
            Dashboard
          </Link>
        </li>
        <li className="sidebar__item">
          <MdNoteAdd />
          <Link className="sidebar__link" to="">
            Add Report
          </Link>
        </li>
        <li className="sidebar__item">
          <RiFileUserFill />
          <Link className="sidebar__link" to="">
            Patient data
          </Link>
        </li>
        <li className="sidebar__item">
          <SiGoogleanalytics />
          <Link className="sidebar__link" to="">
            Analytics
          </Link>
        </li>
        <li className="sidebar__item">
          <FaRegMoneyBillAlt />
          <Link className="sidebar__link" to="">
            Expenses
          </Link>
        </li>
        <li className="sidebar__item">
          <MdSettings />
          <Link className="sidebar__link" to="">
            Setting
          </Link>
        </li>
        <li className="sidebar__item sidebar__bottom">
          <MdHelp />
          <Link className="sidebar__link" to="">
            Help
          </Link>
        </li>
      </ul>
    </div>
  )
}
