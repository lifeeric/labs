import * as React from "react"
import { MdDashboard } from "react-icons/md"
import { MdNoteAdd } from "react-icons/md"
import { RiFileUserFill } from "react-icons/ri"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { RiPlayListAddLine } from "react-icons/ri"
import { Logo } from "../../../UI/Logo/Logo"
import { HumBurger } from "../Burger/Burger"
import { BackdropComp } from "../../../UI/Backdrop/Backdrop"
import { SidebarLink } from "../SidebarLink/SidebarLink"
import { Search } from "../Search/Search"
import { customHook, toggleSidebar } from "../../../../utils/customHook"

import "./Sidebar.scss"

interface Props {}

export const Sidebar: React.FC<Props> = () => {
  const { sidebar, currentUser } = customHook()

  /**
   * links data
   */
  const linksData = [
    {
      to: "/app/dashboard",
      text: "Dashboard",
      icon: <MdDashboard />,
      clx: "",
    },
    {
      to: "/app/addreport",
      text: "Add Report",
      icon: <MdNoteAdd />,
    },
    {
      to: "/app/patientdata",
      text: "Patient data",
      icon: <RiFileUserFill />,
    },
    {
      to: "/app/expenses",
      text: "Expenses",
      icon: <FaRegMoneyBillAlt />,
    },
    {
      to: "/app/template",
      text: "Add template",
      icon: <RiPlayListAddLine />,
    },

    {
      to: "/app/setting",
      text: "Setting",
      icon: <MdSettings />,
    },
    // {
    //   to: "",
    //   text: "Help",
    //   icon: <MdHelp />,
    //   clx: "sidebar__bottom",
    // },
  ]

  return (
    <>
      <div className={`sidebar ${sidebar && `sidebar__open`}`}>
        <div className="sidebar__smallnav">
          <Logo />
          <HumBurger isOpen={sidebar} clickMeDown={toggleSidebar} />
        </div>

        <ul className="sidebar__list">
          {linksData.map(ld => {
            if (ld.to === "/app/template" && !currentUser.isAdmin) return
            return <SidebarLink key={ld.text} {...ld} />
          })}

          <li className="sidebar__item sidebar__search">
            <Search width="180px" />
          </li>
        </ul>
      </div>

      {/** Backdrop */}
      <BackdropComp isTrue={sidebar} onClick={toggleSidebar} />
    </>
  )
}
