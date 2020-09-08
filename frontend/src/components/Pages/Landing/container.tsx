import * as React from "react"
import { Header } from "./Header/Header"
import Home from "./Home/home"
import { About } from "./About/About"
import { Service } from "./Service/Service"
import Parallax from "./Parallax/Parallax"
import { Footer } from "./Footer/Footer"

export default () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Parallax />
      <Footer />
    </>
  )
}
