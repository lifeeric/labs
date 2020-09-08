import * as React from "react"
import { ButtonComp as Button } from "../../../UI/Button/Button"
import { Link } from "gatsby"
import { AiOutlineTwitter } from "react-icons/ai"
import { LinkItem } from "./LinkItem"

import "./Footer.scss"

export const Footer: React.FC = () => {
  /**
   * Links
   */
  const contact = [
    {
      text: "Contact",
      to: "",
    },
    {
      text: "Support",
      to: "/",
    },
  ]

  const resources = [
    {
      text: "Partner",
      to: "",
    },
    {
      text: "API",
      to: "",
    },
  ]

  const company = [
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
      text: "Careers",
      offset: -70,
      to: "/",
    },
  ]

  const legal = [
    {
      text: "Privacy Policy",
      to: "",
    },
    {
      text: "Terms of services",
      to: "",
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__cols">
            <div className="footer__wrapper">
              <h1 className="footer__title">BIO</h1>
              <p className="footer__about">
                We’re currently looking for developer to help us in this open
                source poject
              </p>
              <Button type="secondary" shadow={true} width="100px">
                Join
              </Button>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__wrapper">
              <h5 className="footer__header">Contact</h5>
              <ul className="footer__links">
                {contact.map(ct => (
                  <LinkItem key={ct.text} {...ct} />
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__wrapper">
              <h5 className="footer__header">Resources</h5>
              <ul className="footer__links">
                {resources.map(rs => (
                  <LinkItem key={rs.text} {...rs} />
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__wrapper">
              <h5 className="footer__header">Company</h5>
              <ul className="footer__links">
                {company.map(cp => (
                  <LinkItem key={cp.text} {...cp} />
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__wrapper">
              <h5 className="footer__header">Legal</h5>
              <ul className="footer__links">
                {legal.map(lg => (
                  <LinkItem key={lg.text} {...lg} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__divider">copyright &copy; 2020</div>
    </footer>
  )
}
