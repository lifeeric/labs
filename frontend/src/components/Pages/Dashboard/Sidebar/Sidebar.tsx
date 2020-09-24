import * as React from "react"
import { MdDashboard } from "react-icons/md"
import { MdNoteAdd } from "react-icons/md"
import { RiFileUserFill } from "react-icons/ri"
import { SiGoogleanalytics } from "react-icons/si"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { MdHelp } from "react-icons/md"
import { Logo } from "../../../UI/Logo/Logo"
import { HumBurger } from "../Burger/Burger"
import { BackdropComp } from "../../../UI/Backdrop/Backdrop"
import { SidebarLink } from "../SidebarLink/SidebarLink"
import { Search } from "../Search/Search"
import { customHook, toggleSidebar } from "../../../../utils/customHook"

import "./Sidebar.scss"

interface Props {}

export const Sidebar: React.FC<Props> = () => {
  const sidebar = customHook()

  /**
   * links data
   */
  const linksData = [
    {
      to: "/dashboard",
      text: "Dashboard",
      icon: <MdDashboard />,
      clx: "",
    },
    {
      to: "",
      text: "Add Report",
      icon: <MdNoteAdd />,
    },
    {
      to: "",
      text: "Patient data",
      icon: <RiFileUserFill />,
    },
    {
      to: "",
      text: "Analytics",
      icon: <SiGoogleanalytics />,
    },
    {
      to: "/expenses",
      text: "Expenses",
      icon: <FaRegMoneyBillAlt />,
    },
    {
      to: "",
      text: "Setting",
      icon: <MdSettings />,
    },
    {
      to: "",
      text: "Help",
      icon: <MdHelp />,
      clx: "sidebar__bottom",
    },
  ]

  return (
    <>
      <div className={`sidebar ${sidebar.sidebar && `sidebar__open`}`}>
        <div className="sidebar__smallnav">
          <Logo />
          <HumBurger isOpen={sidebar.sidebar} clickMeDown={toggleSidebar} />
        </div>

        <ul className="sidebar__list">
          {linksData.map(ld => (
            <SidebarLink key={ld.text} {...ld} />
          ))}

          <li className="sidebar__item sidebar__search">
            <Search width="180px" />
          </li>
        </ul>
      </div>

      {/** Backdrop */}
      <BackdropComp isTrue={sidebar.sidebar} onClick={toggleSidebar} />
    </>
  )
}
