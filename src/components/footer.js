import React from "react"
import logo from "../images/logowhite1.png"

const Footer = () => {
  return (
    <section className="footer__main">
      <img src={logo} alt="logo" />
      <section>© {new Date().getFullYear()}</section>
    </section>
  )
}

export default Footer
