import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo1notext.png"
import "./templates.scss"

const ProductView = ({ data: { product } }) => {
  return (
    <Layout>
      <SEO title={product.title} />
      <div className="productView__main">
        <section className="productView__image">
          <img className="productView__bgLogo" src={logo} alt="logo" />
          <Img
            className="productView__productImage"
            fluid={product.images[0].localFile.childImageSharp.fluid}
          />
        </section>
        <section className="productView__desc">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>£{product.priceRange.maxVariantPrice.amount}</h2>
          <div className="productView__cartButtonContainer">
            <button className="productView__cartButton">Add to Cart</button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ProductView

export const query = graphql`
  query ProductQuery($handle: String!) {
    product: shopifyProduct(handle: { eq: $handle }) {
      description
      handle
      images {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      productType
      title
      variants {
        title
      }
    }
  }
`
