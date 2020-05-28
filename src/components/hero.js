import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import logo from "../images/logowhite1.png"
import "./components.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "nathan-anderson-roZgc7SXXmI-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="hero__main">
      <Img
        className="hero__background"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <img className="hero__logo" src={logo} alt="logo" />
    </div>
  )
}

export default Hero
