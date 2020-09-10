import * as React from "react"
import { useState } from "react"
import { MdDashboard } from "react-icons/md"
import { MdNoteAdd } from "react-icons/md"
import { RiFileUserFill } from "react-icons/ri"
import { SiGoogleanalytics } from "react-icons/si"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { MdHelp } from "react-icons/md"

import { Logo } from "../../../UI/Logo/Logo"
import { HumBurger } from "../Burger/Burger"
import "./Sidebar.scss"
import { BackdropComp } from "../../../UI/Backdrop/Backdrop"
import { SidebarLink } from "../SidebarLink/SidebarLink"
import { Search } from "../Search/Search"

interface Props {}

export const Sidebar: React.FC<Props> = () => {
  // Humber
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // clicking
  const clickMeDown = (): void => {
    setIsOpen((isOpen: boolean) => !isOpen)
  }

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
      <div className={`sidebar ${isOpen && `sidebar__open`}`}>
        <div className="sidebar__smallnav">
          <Logo />
          <HumBurger isOpen={isOpen} clickMeDown={clickMeDown} />
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
      <BackdropComp isTrue={isOpen} onClick={clickMeDown} />
    </>
  )
}
