import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import LatestProducts from "../components/latestProducts"
import logo from "../images/unbrak_logo_white_no_text.png"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "landscape-and-outdoors-16.jpg" }
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
    <Layout>
      <SEO title="Home" />
      <Hero />
      <section className="page__width">
        <LatestProducts />
      </section>
      <section className="page__hero">
        <Img
          className="page__heroBackground"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
        <img className="page__logo logoLeft" src={logo} alt="logo" />
        <img className="page__logo logoRight" src={logo} alt="logo" />
        <h1>Outdoor clothing & equipment inspired by the Scottish weather</h1>
      </section>
    </Layout>
  )
}

export default IndexPage
